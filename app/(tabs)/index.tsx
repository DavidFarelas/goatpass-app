import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { CouponInterface, getCoupons } from "@/services/couponService";
import CouponCard from "@/components/CouponCard";

export default function CouponsList() {
  const [coupons, setCoupons] = useState<CouponInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCoupons() {
      try {
        const data = await getCoupons();
        setCoupons(data);
      } catch (error) {
        console.error("Error al obtener cupones:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCoupons();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#FFCD00" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Todos los Cupones</Text>
      <FlatList
        data={coupons}
        keyExtractor={(item: CouponInterface) => item.img}
        renderItem={({ item }) => <CouponCard coupon={item} />}
      />
    </View>
  );
}
