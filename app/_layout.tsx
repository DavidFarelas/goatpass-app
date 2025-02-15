import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

import "../global.css";

export default function RootLayout() {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const loadAuthState = useAuthStore((state) => state.loadAuthState);

  useEffect(() => {
    loadAuthState();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("./auth");
    }
  }, [isAuthenticated]);

  return (
    <Stack>
      {isAuthenticated ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}
