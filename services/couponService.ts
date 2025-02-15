import { couponDto, couponsDto } from "@/dto/couponDto";
import api from "./api";

export interface CouponInterface {
  id: number;
  title: string;
  description: string;
  img: string;
  percentage: number;
}

export async function getCoupons(): Promise<CouponInterface[]> {
  try {
    const response = await api.get("/coupons/all-coupons");
    return couponsDto(response.data.array_response);
  } catch (error: any) {
    console.error(
      "Error en getCoupons:",
      error.response?.data || error.message
    );
    throw new Error("No se pudieron obtener los cupones");
  }
}

export async function getFavoriteCoupons(): Promise<CouponInterface[]> {
  try {
    const response = await api.get("/coupons/user-coupons");
    return couponsDto(response.data.array_response);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error en getFavoriteCoupons:",
      error.response?.data || error.message
    );
    throw new Error("No se pudieron obtener los cupones favoritos");
  }
}

export async function addFavorite(couponId: number): Promise<CouponInterface> {
  try {
    const response = await api.patch(`/user/add-coupon`, { couponId });
    return couponDto(response.data.single_response);
  } catch (error: any) {
    console.error(
      "Error al agregar a favoritos:",
      error.response?.data || error.message
    );
    throw new Error("No se pudo agregar el cupón a favoritos");
  }
}

export async function removeFavorite(couponId: number) {
  try {
    const response = await api.delete(`/user/remove-coupon/${couponId}`);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error al quitar de favoritos:",
      error.response?.data || error.message
    );
    throw new Error("No se pudo quitar el cupón de favoritos");
  }
}
