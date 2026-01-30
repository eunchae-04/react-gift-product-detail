import axios from 'axios';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { mockProductSummary } from '../mocks/mockData';

export interface ProductSummary {
  id: number;
  name: string;
  brandName: string;
  price: number;
  imageURL: string;
}

const fetchProductSummary = async (
  productId: string,
  authToken: string
): Promise<ProductSummary> => {
  try {
    const response = await axios.get(`/api/products/${productId}/summary`, {
      headers: {
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
    });

    if (!response.data?.data) {
      throw new Error('제품 데이터를 불러오지 못했습니다.');
    }

    return response.data.data;
  } catch {
    // API 호출 실패 시 목데이터 반환
    console.warn('상품 요약 API 호출 실패, 목데이터 사용');
    return mockProductSummary;
  }
};

export function useProductSummaryQuery(
  productId: string,
  authToken: string,
  options?: UseQueryOptions<ProductSummary, Error, ProductSummary>
) {
  return useQuery<ProductSummary, Error>({
    queryKey: ['productSummary', productId],
    queryFn: () => fetchProductSummary(productId, authToken),
    enabled: !!productId && !!authToken,
    ...options,
  });
}
