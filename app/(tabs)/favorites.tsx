import CouponCard from "@/components/CouponCard";
import { useFavoritesStore } from "@/store/favoritesStore";
import { useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

export default function FavoriteCoupons() {
  const { favorites, loadFavorites } = useFavoritesStore();

  useEffect(() => {
    loadFavorites();
  }, []);

  if (!favorites) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#FFCD00" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Cupones Favoritos</Text>
      {favorites.length === 0 ? (
        <Text className="text-gray-500 text-center">
          No tienes cupones en favoritos.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CouponCard coupon={item} />}
        />
      )}
    </View>
  );
}
