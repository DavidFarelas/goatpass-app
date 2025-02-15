import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser } from "../services/authService";

interface AuthState {
  user: string | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  loadAuthState: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  login: async (email) => {
    try {
      const { token } = await loginUser(email);
      await AsyncStorage.setItem("user", email);
      await AsyncStorage.setItem("token", token);
      set({ user: email, token, isAuthenticated: true });
    } catch (error) {
      console.error("Error en login:", error);
      throw error;
    }
  },

  logout: async () => {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("token");
    set({ user: null, token: null, isAuthenticated: false });
  },

  loadAuthState: async () => {
    const user = await AsyncStorage.getItem("user");
    const token = await AsyncStorage.getItem("token");
    if (user && token) {
      set({ user, token, isAuthenticated: true });
    }
  },
}));
