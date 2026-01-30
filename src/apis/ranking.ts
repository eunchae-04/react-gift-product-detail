import axios from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';
import { mockRankingProducts } from '../mocks/mockData';

export type Price = {
  basicPrice: number;
  sellingPrice: number;
  discountRate: number;
};

export type BrandInfo = {
  id: number;
  name: string;
  imageURL: string;
};

export type RankingItem = {
  id: number;
  name: string;
  price: Price;
  imageURL: string;
  brandInfo: BrandInfo;
};

export type RankingResponse = {
  data: RankingItem[];
};

const genderToTargetTypeMap: Record<string, string> = {
  전체: 'ALL',
  여성이: 'FEMALE',
  남성이: 'MALE',
  청소년이: 'TEEN',
};

const giftTypeToRankTypeMap: Record<string, string> = {
  '받고 싶어한': 'MANY_WISH',
  '많이 선물한': 'MANY_RECEIVE',
  '위시로 받은': 'MANY_WISH_RECEIVE',
};

export const fetchRanking = async (
  gender: string,
  giftType: string
): Promise<RankingItem[]> => {
  try {
    const targetType = genderToTargetTypeMap[gender] || 'ALL';
    const rankType = giftTypeToRankTypeMap[giftType] || 'MANY_WISH';

    const response = await axios.get<RankingResponse>('/api/products/ranking', {
      params: { targetType, rankType },
    });

    if (!response.data || !Array.isArray(response.data.data)) {
      throw new Error('Unexpected API response structure');
    }
    return response.data.data;
  } catch {
    // API 호출 실패 시 목데이터 반환
    console.warn('랭킹 API 호출 실패, 목데이터 사용');
    return mockRankingProducts;
  }
};

export const useSuspenseRanking = (gender: string, giftType: string) => {
  return useSuspenseQuery<RankingItem[], Error>({
    queryKey: ['ranking', gender, giftType],
    queryFn: () => fetchRanking(gender, giftType),
    staleTime: 1000 * 60 * 5,
  });
};
