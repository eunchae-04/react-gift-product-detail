// Mock Data 모음

// 테마 카테고리 목데이터
export const mockThemes = [
  {
    themeId: 1,
    name: '생일 선물',
    image: 'https://via.placeholder.com/200?text=Birthday',
  },
  {
    themeId: 2,
    name: '감사 선물',
    image: 'https://via.placeholder.com/200?text=Thank+You',
  },
  {
    themeId: 3,
    name: '결혼 선물',
    image: 'https://via.placeholder.com/200?text=Wedding',
  },
  {
    themeId: 4,
    name: '신혼집 선물',
    image: 'https://via.placeholder.com/200?text=Housewarming',
  },
  {
    themeId: 5,
    name: '졸업 선물',
    image: 'https://via.placeholder.com/200?text=Graduation',
  },
];

// 상품 기본 정보 목데이터
export const mockProductInfo = {
  id: 1,
  name: '프리미엄 선물세트',
  price: {
    basicPrice: 50000,
    sellingPrice: 39900,
    discountRate: 20,
  },
  imageURL: 'https://via.placeholder.com/400?text=Premium+Gift+Set',
  brandInfo: {
    id: 1,
    name: '럭셔리브랜드',
    imageURL: 'https://via.placeholder.com/100?text=Brand',
  },
};

// 상품 상세 정보 목데이터
export const mockProductDetail = {
  description:
    '이 선물세트는 최고 품질의 재료로 만들어진 프리미엄 제품입니다. 각 항목은 신중하게 선택되었으며, 아름다운 패키징으로 감싼 완벽한 선물입니다.',
  announcements: [
    {
      name: '배송',
      value: '택배 (2-3일)',
      displayOrder: 1,
    },
    {
      name: '포장',
      value: '고급 포장지 무료',
      displayOrder: 2,
    },
    {
      name: '교환',
      value: '구매 후 7일 이내',
      displayOrder: 3,
    },
  ],
};

// 상품 요약 정보 목데이터
export const mockProductSummary = {
  id: 1,
  name: '프리미엄 선물세트',
  brandName: '럭셔리브랜드',
  price: 39900,
  imageURL: 'https://via.placeholder.com/400?text=Premium+Gift+Set',
};

// 랭킹 상품 목데이터
export const mockRankingProducts = [
  {
    id: 101,
    name: '럭셔리 향수 세트',
    price: {
      basicPrice: 80000,
      sellingPrice: 59900,
      discountRate: 25,
    },
    imageURL: 'https://via.placeholder.com/300?text=Perfume+Set',
    brandInfo: {
      id: 10,
      name: '향수명가',
      imageURL: 'https://via.placeholder.com/100?text=Perfume+Brand',
    },
  },
  {
    id: 102,
    name: '프리미엄 초콜릿 세트',
    price: {
      basicPrice: 45000,
      sellingPrice: 34900,
      discountRate: 22,
    },
    imageURL: 'https://via.placeholder.com/300?text=Chocolate+Set',
    brandInfo: {
      id: 11,
      name: '초콜릿의신',
      imageURL: 'https://via.placeholder.com/100?text=Chocolate+Brand',
    },
  },
  {
    id: 103,
    name: '와인 & 치즈 세트',
    price: {
      basicPrice: 120000,
      sellingPrice: 89900,
      discountRate: 25,
    },
    imageURL: 'https://via.placeholder.com/300?text=Wine+Cheese',
    brandInfo: {
      id: 12,
      name: '와인클럽',
      imageURL: 'https://via.placeholder.com/100?text=Wine+Brand',
    },
  },
  {
    id: 104,
    name: '명품 시계',
    price: {
      basicPrice: 450000,
      sellingPrice: 399900,
      discountRate: 11,
    },
    imageURL: 'https://via.placeholder.com/300?text=Watch',
    brandInfo: {
      id: 13,
      name: '시계명가',
      imageURL: 'https://via.placeholder.com/100?text=Watch+Brand',
    },
  },
  {
    id: 105,
    name: '고급 향초 세트',
    price: {
      basicPrice: 65000,
      sellingPrice: 49900,
      discountRate: 23,
    },
    imageURL: 'https://via.placeholder.com/300?text=Candle+Set',
    brandInfo: {
      id: 14,
      name: '향기의집',
      imageURL: 'https://via.placeholder.com/100?text=Candle+Brand',
    },
  },
];

// 테마별 상품 목데이터
export const mockThemeProducts = {
  list: [
    {
      id: 201,
      imageURL: 'https://via.placeholder.com/300?text=Theme+Product+1',
      name: '테마 상품 1',
      price: {
        sellingPrice: 29900,
      },
      brandInfo: {
        name: '브랜드 A',
      },
    },
    {
      id: 202,
      imageURL: 'https://via.placeholder.com/300?text=Theme+Product+2',
      name: '테마 상품 2',
      price: {
        sellingPrice: 39900,
      },
      brandInfo: {
        name: '브랜드 B',
      },
    },
    {
      id: 203,
      imageURL: 'https://via.placeholder.com/300?text=Theme+Product+3',
      name: '테마 상품 3',
      price: {
        sellingPrice: 49900,
      },
      brandInfo: {
        name: '브랜드 C',
      },
    },
    {
      id: 204,
      imageURL: 'https://via.placeholder.com/300?text=Theme+Product+4',
      name: '테마 상품 4',
      price: {
        sellingPrice: 59900,
      },
      brandInfo: {
        name: '브랜드 D',
      },
    },
  ],
  cursor: 0,
  hasMoreList: true,
};

// 테마 정보 목데이터
export const mockThemeInfo = {
  themeId: 1,
  name: '생일 선물',
  title: '생일 선물 추천',
  description: '소중한 사람의 생일을 축하하는 특별한 선물들을 모았습니다.',
  backgroundColor: '#FFE5B4',
};

// 상품 리뷰 목데이터
export const mockProductReviews = {
  reviews: [
    {
      authorName: '김철수',
      content: '정말 좋은 선물이었어요! 품질도 훌륭하고 포장도 예뻤습니다.',
    },
    {
      authorName: '이영희',
      content: '빠른 배송과 친절한 서비스 감사합니다. 다시 주문하겠습니다.',
    },
    {
      authorName: '박영수',
      content: '가격 대비 정말 훌륭한 제품입니다. 추천합니다!',
    },
  ],
};
