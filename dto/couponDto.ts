import { CouponInterface } from "@/services/couponService";

export const couponDto = (data: any): CouponInterface => {
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    img: data.img,
    percentage: data.percentage,
  };
};

export const couponsDto = (data: any[]): CouponInterface[] => {
  return data.map((c) => couponDto(c));
};
