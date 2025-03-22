import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { AuthProvider } from "../context/AuthContext"; // You'll build this later!

export default function RootLayout() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.replace("/landing");
      } else {
        router.replace("/(tabs)/home");
      }
    }
  }, [user, isLoading]);

  // Optional: Loading screen
  if (isLoading) {
    return null;
  }

  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
