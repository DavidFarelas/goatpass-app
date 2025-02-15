import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useFavoritesStore } from "../store/favoritesStore";
import { useState } from "react";
import { CouponInterface } from "@/services/couponService";

interface CouponCardProps {
  coupon: CouponInterface;
}

export default function CouponCard({ coupon }: CouponCardProps) {
  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFavorite = favorites.some((c) => c.id === coupon.id);
  const [loading, setLoading] = useState(false);

  const handleToggleFavorite = async () => {
    setLoading(true);
    try {
      await toggleFavorite(coupon.id);
    } catch (error) {
      console.error("Error al actualizar favoritos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableOpacity className="bg-white w-full max-w-lg rounded-xl shadow-md overflow-hidden items-center p-4 mb-4 border border-gray-300">
      <Image
        source={{ uri: coupon.img }}
        style={{ width: 120, height: 120 }}
        className="rounded-lg"
        resizeMode="cover"
      />

      <View className="mt-4 items-center w-full">
        <Text className="text-lg font-bold text-gray-800">{coupon.title}</Text>
        <Text className="text-gray-500 text-sm mt-1 text-center">
          {coupon.description}
        </Text>

        <View className="mt-4 w-full items-center">
          <Text className="text-yellow-500 text-xl font-bold mb-2">
            {coupon.percentage}% OFF
          </Text>

          <TouchableOpacity
            className="p-3 rounded-full"
            onPress={handleToggleFavorite}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="gray" />
            ) : (
              <FontAwesome
                name={isFavorite ? "heart" : "heart-o"}
                size={28}
                color={isFavorite ? "red" : "gray"}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
