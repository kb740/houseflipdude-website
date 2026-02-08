import { useEffect, useRef, useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { MapPin, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const API_KEY = import.meta.env.VITE_FRONTEND_FORGE_API_KEY;
const FORGE_BASE_URL =
  import.meta.env.VITE_FRONTEND_FORGE_API_URL ||
  "https://forge.butterfly-effect.dev";
const MAPS_PROXY_URL = `${FORGE_BASE_URL}/v1/maps/proxy`;

// Load Google Maps script (shared with Map.tsx)
let scriptLoadPromise: Promise<void> | null = null;
function loadMapsScript(): Promise<void> {
  if (window.google?.maps?.places) return Promise.resolve();
  if (scriptLoadPromise) return scriptLoadPromise;

  scriptLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${MAPS_PROXY_URL}/maps/api/js?key=${API_KEY}&v=weekly&libraries=places`;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps script"));
    document.head.appendChild(script);
  });

  return scriptLoadPromise;
}

interface Prediction {
  placeId: string;
  description: string;
  mainText: string;
  secondaryText: string;
}

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onAddressSelect?: (address: {
    fullAddress: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    lat?: number;
    lng?: number;
  }) => void;
  placeholder?: string;
  className?: string;
  id?: string;
  required?: boolean;
}

export default function AddressAutocomplete({
  value,
  onChange,
  onAddressSelect,
  placeholder = "Start typing an address...",
  className,
  id = "address-autocomplete",
  required = false,
}: AddressAutocompleteProps) {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const autocompleteService = useRef<google.maps.places.AutocompleteService | null>(null);
  const placesService = useRef<google.maps.places.PlacesService | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSelectingRef = useRef(false);

  // Load Google Maps script
  useEffect(() => {
    loadMapsScript().then(() => {
      autocompleteService.current = new google.maps.places.AutocompleteService();
      // PlacesService needs a div element (doesn't need to be visible)
      const div = document.createElement("div");
      placesService.current = new google.maps.places.PlacesService(div);
      setScriptLoaded(true);
    }).catch(err => {
      console.error("Failed to load Google Maps for autocomplete:", err);
    });
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchPredictions = useCallback(
    (input: string) => {
      if (!autocompleteService.current || input.length < 3) {
        setPredictions([]);
        setShowDropdown(false);
        return;
      }

      setLoading(true);
      autocompleteService.current.getPlacePredictions(
        {
          input,
          componentRestrictions: { country: "us" },
          types: ["address"],
        },
        (results, status) => {
          setLoading(false);
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            const mapped: Prediction[] = results.map((r) => ({
              placeId: r.place_id,
              description: r.description,
              mainText: r.structured_formatting.main_text,
              secondaryText: r.structured_formatting.secondary_text,
            }));
            setPredictions(mapped);
            setShowDropdown(true);
            setHighlightedIndex(-1);
          } else {
            setPredictions([]);
            setShowDropdown(false);
          }
        }
      );
    },
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);
    isSelectingRef.current = false;

    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      fetchPredictions(val);
    }, 300);
  };

  const handleSelect = (prediction: Prediction) => {
    isSelectingRef.current = true;
    onChange(prediction.description);
    setShowDropdown(false);
    setPredictions([]);

    // Fetch detailed place info for structured address components
    if (placesService.current) {
      placesService.current.getDetails(
        {
          placeId: prediction.placeId,
          fields: ["address_components", "formatted_address", "geometry"],
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place) {
            const components = place.address_components || [];
            const getComponent = (type: string) =>
              components.find((c) => c.types.includes(type))?.long_name || "";
            const getShortComponent = (type: string) =>
              components.find((c) => c.types.includes(type))?.short_name || "";

            const street = `${getComponent("street_number")} ${getComponent("route")}`.trim();
            const city = getComponent("locality") || getComponent("sublocality_level_1") || getComponent("administrative_area_level_2");
            const state = getShortComponent("administrative_area_level_1");
            const zip = getComponent("postal_code");

            const fullAddress = place.formatted_address || prediction.description;
            onChange(fullAddress);

            if (onAddressSelect) {
              onAddressSelect({
                fullAddress,
                street,
                city,
                state,
                zip,
                lat: place.geometry?.location?.lat(),
                lng: place.geometry?.location?.lng(),
              });
            }
          }
        }
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown || predictions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < predictions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : predictions.length - 1));
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      handleSelect(predictions[highlightedIndex]);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
          ref={inputRef}
          id={id}
          type="text"
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (predictions.length > 0 && !isSelectingRef.current) {
              setShowDropdown(true);
            }
          }}
          required={required}
          className={cn("pl-9 bg-background", className)}
          aria-autocomplete="list"
          aria-expanded={showDropdown}
          aria-controls={`${id}-listbox`}
          role="combobox"
        />
        {loading && (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-muted-foreground" />
        )}
      </div>

      {showDropdown && predictions.length > 0 && (
        <ul
          id={`${id}-listbox`}
          role="listbox"
          className="absolute z-50 w-full mt-1 bg-popover text-popover-foreground border border-border rounded-lg shadow-lg overflow-hidden"
        >
          {predictions.map((prediction, index) => (
            <li
              key={prediction.placeId}
              role="option"
              aria-selected={index === highlightedIndex}
              className={cn(
                "flex items-start gap-3 px-3 py-2.5 cursor-pointer transition-colors",
                index === highlightedIndex
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent/50"
              )}
              onMouseDown={(e) => {
                e.preventDefault(); // Prevent blur before click registers
                handleSelect(prediction);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div className="min-w-0">
                <div className="font-medium text-sm truncate">
                  {prediction.mainText}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {prediction.secondaryText}
                </div>
              </div>
            </li>
          ))}
          <li className="px-3 py-1.5 text-[10px] text-muted-foreground text-right border-t border-border/50">
            Powered by Google
          </li>
        </ul>
      )}
    </div>
  );
}
