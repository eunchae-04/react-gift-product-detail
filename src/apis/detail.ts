import axios from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';
import {
  mockProductInfo,
  mockProductDetail,
  mockProductReviews,
} from '../mocks/mockData';

// 1. 상품 기본 정보
export interface ProductInfo {
  id: number;
  name: string;
  price: {
    basicPrice: number;
    sellingPrice: number;
    discountRate: number;
  };
  imageURL: string;
  brandInfo: {
    id: number;
    name: string;
    imageURL: string;
  };
}

export const fetchProductInfo = async (
  productId: string
): Promise<ProductInfo> => {
  try {
    const res = await axios.get<{ data: ProductInfo }>(
      `/api/products/${productId}`
    );
    return res.data.data;
  } catch {
    // API 호출 실패 시 목데이터 반환
    console.warn('상품 정보 API 호출 실패, 목데이터 사용');
    return mockProductInfo;
  }
};

export const useProductInfo = (productId: string) =>
  useSuspenseQuery({
    queryKey: ['productInfo', productId],
    queryFn: () => fetchProductInfo(productId),
  });

// 2. 상품 상세 정보
export interface Announcement {
  name: string;
  value: string;
  displayOrder: number;
}

export interface ProductDetail {
  description: string;
  announcements: Announcement[];
}

export const fetchProductDetail = async (
  productId: string
): Promise<ProductDetail> => {
  try {
    const res = await axios.get<{ data: ProductDetail }>(
      `/api/products/${productId}/detail`
    );
    return res.data.data;
  } catch {
    // API 호출 실패 시 목데이터 반환
    console.warn('상품 상세 정보 API 호출 실패, 목데이터 사용');
    return mockProductDetail;
  }
};

export const useProductDetail = (productId: string) =>
  useSuspenseQuery({
    queryKey: ['productDetail', productId],
    queryFn: () => fetchProductDetail(productId),
  });

// 3. 찜 정보 (mock API로 교체)
export interface WishInfo {
  wishCount: number;
  isWished: boolean;
}
const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export const fetchAddWishSuccess = async (newWish: boolean) => {
  await sleep(300);
  return newWish;
};

export const fetchAddWishError = async (_newWish: boolean) => {
  await sleep(300);
  throw new axios.AxiosError('mock error', 'mock_code');
};

export const fetchWishInfo = async (_productId: string) => {
  await new Promise((r) => setTimeout(r, 300));
  return { wishCount: 1234, isWished: false };
};

export const useWishInfo = (productId: string) =>
  useSuspenseQuery({
    queryKey: ['wishInfo', productId],
    queryFn: () => fetchWishInfo(productId),
  });

// 4. 하이라이트 리뷰
export interface Review {
  id: string;
  authorName: string;
  content: string;
}

export interface HighlightReview {
  totalCount: number;
  reviews: Review[];
}

export const fetchHighlightReview = async (
  productId: string
): Promise<HighlightReview> => {
  try {
    const res = await axios.get<{ data: HighlightReview }>(
      `/api/products/${productId}/highlight-review`
    );
    return res.data.data;
  } catch {
    // API 호출 실패 시 목데이터 반환
    console.warn('리뷰 API 호출 실패, 목데이터 사용');
    return {
      totalCount: mockProductReviews.reviews.length,
      reviews: mockProductReviews.reviews.map((review, idx) => ({
        id: `review-${idx}`,
        ...review,
      })),
    };
  }
};

export const useHighlightReview = (productId: string) =>
  useSuspenseQuery({
    queryKey: ['highlightReview', productId],
    queryFn: () => fetchHighlightReview(productId),
  });
