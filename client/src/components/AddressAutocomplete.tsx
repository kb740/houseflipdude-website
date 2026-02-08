import { useEffect, useRef, useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { MapPin, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { trpc } from "@/lib/trpc";

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
  placeholder = "Start typing your property address...",
  className,
  id = "address-autocomplete",
  required = false,
}: AddressAutocompleteProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSelectingRef = useRef(false);

  // tRPC query for autocomplete — only runs when searchTerm is set
  const { data: autocompleteData, isFetching } = trpc.places.autocomplete.useQuery(
    { input: searchTerm },
    {
      enabled: searchTerm.length >= 3 && !isSelectingRef.current,
      staleTime: 30000,
      refetchOnWindowFocus: false,
    }
  );

  // tRPC utility for fetching place details on demand
  const trpcUtils = trpc.useUtils();

  // Update predictions when data arrives
  useEffect(() => {
    if (autocompleteData && !isSelectingRef.current) {
      setPredictions(autocompleteData);
      setShowDropdown(autocompleteData.length > 0);
      setHighlightedIndex(-1);
    }
  }, [autocompleteData]);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);
    isSelectingRef.current = false;

    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setSearchTerm(val);
    }, 300);
  };

  const handleSelect = useCallback(async (prediction: Prediction) => {
    isSelectingRef.current = true;
    onChange(prediction.description);
    setShowDropdown(false);
    setPredictions([]);
    setSearchTerm("");

    if (onAddressSelect) {
      setFetchingDetails(true);
      try {
        const details = await trpcUtils.places.details.fetch({
          placeId: prediction.placeId,
        });
        if (details) {
          onChange(details.fullAddress);
          onAddressSelect({
            fullAddress: details.fullAddress,
            street: details.street,
            city: details.city,
            state: details.state,
            zip: details.zip,
            lat: details.lat ?? undefined,
            lng: details.lng ?? undefined,
          });
        } else {
          onAddressSelect({
            fullAddress: prediction.description,
            street: prediction.mainText,
            city: "",
            state: "",
            zip: "",
          });
        }
      } catch (err) {
        console.error("Place details error:", err);
        onAddressSelect({
          fullAddress: prediction.description,
          street: prediction.mainText,
          city: "",
          state: "",
          zip: "",
        });
      } finally {
        setFetchingDetails(false);
      }
    }
  }, [onChange, onAddressSelect, trpcUtils]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown || predictions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < predictions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : predictions.length - 1
      );
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      handleSelect(predictions[highlightedIndex]);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  const isLoading = isFetching || fetchingDetails;

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
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
        {isLoading && (
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
                e.preventDefault();
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
