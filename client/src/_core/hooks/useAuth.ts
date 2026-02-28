import { useClerk, useUser } from "@clerk/clerk-react";

export function useAuth() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useClerk();

  const isAdmin = user?.publicMetadata?.role === "admin";

  return {
    user:
      isSignedIn && user
        ? {
            id: user.id,
            role: isAdmin ? ("admin" as const) : ("user" as const),
            name: user.fullName,
            email: user.primaryEmailAddress?.emailAddress ?? null,
          }
        : null,
    loading: !isLoaded,
    isAuthenticated: !!isSignedIn,
    isAdmin,
    logout: () => signOut(),
  };
}
