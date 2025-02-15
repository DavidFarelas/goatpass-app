import { Tabs } from "expo-router";
import { TouchableOpacity, Alert, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAuthStore } from "@/store/authStore";

export default function TabLayout() {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    if (Platform.OS === "web") {
      const confirm = window.confirm("¿Estás seguro de que quieres salir?");
      if (confirm) logout();
    } else {
      Alert.alert("Cerrar Sesión", "¿Estás seguro de que quieres salir?", [
        { text: "Cancelar", style: "cancel" },
        { text: "Salir", onPress: logout },
      ]);
    }
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFCD00",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Cupones",
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity onPress={handleLogout} className="mr-4">
              <FontAwesome name="sign-out" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="tags" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favoritos",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
