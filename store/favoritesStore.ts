import {
  addFavorite,
  CouponInterface,
  getFavoriteCoupons,
  removeFavorite,
} from "@/services/couponService";
import { create } from "zustand";

interface FavoritesState {
  favorites: CouponInterface[];
  loadFavorites: () => Promise<void>;
  toggleFavorite: (couponId: number) => Promise<void>;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],
  loadFavorites: async () => {
    try {
      const favorites = await getFavoriteCoupons();
      set({ favorites });
    } catch (error) {
      console.error("Error al cargar favoritos:", error);
    }
  },
  toggleFavorite: async (couponId) => {
    try {
      const { favorites } = get();

      if (favorites.some((coupon) => coupon.id === couponId)) {
        await removeFavorite(couponId);
      } else {
        await addFavorite(couponId);
      }
      await get().loadFavorites();
    } catch (error) {
      console.error("Error al alternar favorito:", error);
    }
  },
}));
