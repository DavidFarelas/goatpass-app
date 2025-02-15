import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)");
    }
  }, [isAuthenticated]);

  const handleAuth = async () => {
    if (!email.includes("@")) {
      alert("Correo inválido, Por favor ingresa un correo válido.");
      return;
    }

    setLoading(true);
    try {
      await login(email).then();
    } catch (error) {
      console.error("Error en autenticación:", error);
      Alert.alert("Error", "No se pudo autenticar el usuario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-2xl font-bold text-gray-800 mb-4">
        Inicia sesión o regístrate
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="ejemplo@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        className="w-full bg-white p-3 border border-gray-300 rounded-lg mb-4"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#FFCD00" />
      ) : (
        <TouchableOpacity
          className="bg-yellow-400 py-3 px-6 rounded-lg w-full"
          onPress={handleAuth}
        >
          <Text className="text-white text-center font-bold">Continuar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
