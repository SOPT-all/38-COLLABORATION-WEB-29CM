import type { MiddleCategory } from './types';

export const MIDDLE_CATEGORIES: MiddleCategory[] = [
  {
    middleCategoryId: 101,
    name: '의류',
    subCategories: [
      { subCategoryId: 1001, name: '단독' },
      { subCategoryId: 1002, name: '해외브랜드' },
      { subCategoryId: 1003, name: '상의' },
      { subCategoryId: 1004, name: '바지' },
      { subCategoryId: 1005, name: '원피스' },
      { subCategoryId: 1006, name: '스커트' },
      { subCategoryId: 1007, name: '아우터' },
      { subCategoryId: 1008, name: '니트웨어' },
      { subCategoryId: 1009, name: '홈웨어' },
      { subCategoryId: 1010, name: '언더웨어' },
      { subCategoryId: 1011, name: '점프수트' },
      { subCategoryId: 1012, name: '셋업' },
      { subCategoryId: 1013, name: '파트복/행사복' },
    ],
  },
  {
    middleCategoryId: 102,
    name: '가방',
    subCategories: [
      { subCategoryId: 1101, name: '단독' },
      { subCategoryId: 1102, name: '해외브랜드' },
      { subCategoryId: 1103, name: '숄더백' },
      { subCategoryId: 1104, name: '토트백' },
      { subCategoryId: 1105, name: '에코/캔버스백' },
      { subCategoryId: 1106, name: '백팩' },
      { subCategoryId: 1107, name: '크로스백' },
      { subCategoryId: 1108, name: '캐리어/여행가방' },
      { subCategoryId: 1109, name: '보스턴백' },
      { subCategoryId: 1110, name: '웨이스트백' },
      { subCategoryId: 1111, name: '클러치' },
      { subCategoryId: 1112, name: '기타 가방' },
      { subCategoryId: 1113, name: '가방 악세사리' },
    ],
  },
];
