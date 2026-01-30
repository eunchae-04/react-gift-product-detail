import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { mockThemeProducts } from '../mocks/mockData';

export interface RawProduct {
  id: number;
  imageURL: string;
  name: string;
  price: {
    sellingPrice: number;
  };
  brandInfo: {
    name: string;
  };
}

export interface ThemeProductsResponse {
  list: RawProduct[];
  cursor: number;
  hasMoreList: boolean;
}

export interface ParsedProduct {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  brand: string;
}

export interface ThemeProductsResult {
  products: ParsedProduct[];
  nextCursor: number;
  hasMoreList: boolean;
}

export const fetchThemeProducts = async (
  themeId: number,
  cursor: number,
  limit: number
): Promise<ThemeProductsResult> => {
  try {
    const response = await axios.get<{ data: ThemeProductsResponse }>(
      `/api/themes/${themeId}/products`,
      {
        params: { cursor, limit },
      }
    );

    const { list, cursor: nextCursor, hasMoreList } = response.data.data;

    if (!Array.isArray(list)) {
      throw new Error('상품 리스트 형식이 올바르지 않습니다.');
    }

    const parsedProducts = list.map(
      (item): ParsedProduct => ({
        id: item.id,
        imageUrl: item.imageURL,
        name: item.name,
        price: item.price.sellingPrice,
        brand: item.brandInfo.name,
      })
    );

    return { products: parsedProducts, nextCursor, hasMoreList };
  } catch {
    // API 호출 실패 시 목데이터 반환
    console.warn('테마 상품 API 호출 실패, 목데이터 사용');
    const { list, cursor: nextCursor, hasMoreList } = mockThemeProducts;
    const parsedProducts = list.map(
      (item): ParsedProduct => ({
        id: item.id,
        imageUrl: item.imageURL,
        name: item.name,
        price: item.price.sellingPrice,
        brand: item.brandInfo.name,
      })
    );
    return { products: parsedProducts, nextCursor, hasMoreList };
  }
};

export const useThemeProducts = (themeId: number, limit: number = 10) => {
  return useInfiniteQuery<ThemeProductsResult, Error>({
    queryKey: ['themeProducts', themeId, limit],
    queryFn: ({ pageParam = 0 }) =>
      fetchThemeProducts(themeId, pageParam as number, limit),
    getNextPageParam: (lastPage: ThemeProductsResult) =>
      lastPage.hasMoreList ? lastPage.nextCursor : undefined,
    initialPageParam: 0,
  });
};
