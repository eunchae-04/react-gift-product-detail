import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { BASE_API_URL } from './index';
import { mockThemes } from '../mocks/mockData';

export type Category = {
  themeId: number;
  name: string;
  image: string;
};

export const fetchThemes = async (): Promise<Category[]> => {
  try {
    const response = await axios.get(`${BASE_API_URL}/api/themes`);
    const responseData = response.data;

    if (Array.isArray(responseData)) {
      return responseData;
    }

    if (responseData && Array.isArray(responseData.data)) {
      return responseData.data;
    }

    throw new Error('Unexpected API response structure');
  } catch {
    // API 호출 실패 시 목데이터 반환
    console.warn('테마 API 호출 실패, 목데이터 사용');
    return mockThemes;
  }
};

export const useThemeCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ['themes'],
    queryFn: fetchThemes,
    staleTime: 1000 * 60 * 5,
  });
};
