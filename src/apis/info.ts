import axios from 'axios';
import { useQuery, queryOptions } from '@tanstack/react-query';
import { mockThemeInfo } from '../mocks/mockData';

export type ThemeInfo = {
  themeId: number;
  name: string;
  title?: string;
  description?: string;
  backgroundColor?: string;
};

export const fetchThemeInfo = async (themeId: string): Promise<ThemeInfo> => {
  try {
    const response = await axios.get(`/api/themes/${themeId}/info`);
    return response.data.data;
  } catch {
    // API 호출 실패 시 목데이터 반환
    console.warn('테마 정보 API 호출 실패, 목데이터 사용');
    return mockThemeInfo;
  }
};

export const themeInfoQueryOptions = (themeId: string) =>
  queryOptions({
    queryKey: ['themeInfo', themeId],
    queryFn: () => fetchThemeInfo(themeId),
    retry: false,
    throwOnError: true,
  });

export const useThemeInfo = (themeId: string) => {
  return useQuery(themeInfoQueryOptions(themeId));
};
