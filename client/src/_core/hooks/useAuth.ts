import { useClerk, useUser } from "@clerk/clerk-react";
import { trpc } from "@/lib/trpc";

export function useAuth() {
  const { user: clerkUser, isLoaded, isSignedIn } = useUser();
  const { signOut } = useClerk();

  // Only query the server role once Clerk confirms the user is signed in.
  // The server context derives the role from ADMIN_USER_ID env var (not
  // Clerk publicMetadata), so this is the authoritative source of truth.
  const meQuery = trpc.auth.me.useQuery(undefined, {
    enabled: isLoaded && !!isSignedIn,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const serverRole = meQuery.data?.role ?? null;
  const isAdmin = serverRole === "admin";

  // Stay in loading state until Clerk is ready, and — if the user is
  // signed in — until the server role has also resolved. This prevents
  // the "Access Denied" screen from flashing while the role is fetching.
  const loading = !isLoaded || (!!isSignedIn && meQuery.isLoading);

  return {
    user:
      isSignedIn && clerkUser
        ? {
            id: clerkUser.id,
            role: isAdmin ? ("admin" as const) : ("user" as const),
            name: clerkUser.fullName,
            email: clerkUser.primaryEmailAddress?.emailAddress ?? null,
          }
        : null,
    loading,
    isAuthenticated: !!isSignedIn,
    isAdmin,
    logout: () => signOut(),
  };
}
