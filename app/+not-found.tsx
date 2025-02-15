import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-3xl font-bold text-gray-800 mb-4">404</Text>
      <Text className="text-lg text-gray-600 mb-6">Página no encontrada</Text>

      <TouchableOpacity
        className="bg-yellow-400 py-3 px-6 rounded-lg"
        onPress={() => router.replace("/")}
      >
        <Text className="text-white text-center font-bold">
          Volver al inicio
        </Text>
      </TouchableOpacity>
    </View>
  );
}
