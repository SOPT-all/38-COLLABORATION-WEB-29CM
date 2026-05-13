import type { MegaMenuGroup } from './types';

export const MEGA_MENU_GROUPS: MegaMenuGroup[] = [
  {
    groupId: 101,
    name: '의류',
    displayOrder: 1,
    items: [
      { categoryId: 1001, name: '단독', displayOrder: 1 },
      { categoryId: 1002, name: '해외브랜드', displayOrder: 2 },
      { categoryId: 1003, name: '상의', displayOrder: 3 },
      { categoryId: 1004, name: '바지', displayOrder: 4 },
      { categoryId: 1005, name: '원피스', displayOrder: 5 },
      { categoryId: 1006, name: '스커트', displayOrder: 6 },
      { categoryId: 1007, name: '아우터', displayOrder: 7 },
      { categoryId: 1008, name: '니트웨어', displayOrder: 8 },
      { categoryId: 1009, name: '홈웨어', displayOrder: 9 },
      { categoryId: 1010, name: '언더웨어', displayOrder: 10 },
      { categoryId: 1011, name: '점프수트', displayOrder: 11 },
      { categoryId: 1012, name: '셋업', displayOrder: 12 },
      { categoryId: 1013, name: '파트복/행사복', displayOrder: 13 },
    ],
  },
  {
    groupId: 102,
    name: '가방',
    displayOrder: 2,
    items: [
      { categoryId: 1101, name: '단독', displayOrder: 1 },
      { categoryId: 1102, name: '해외브랜드', displayOrder: 2 },
      { categoryId: 1103, name: '숄더백', displayOrder: 3 },
      { categoryId: 1104, name: '토트백', displayOrder: 4 },
      { categoryId: 1105, name: '에코/캔버스백', displayOrder: 5 },
      { categoryId: 1106, name: '백팩', displayOrder: 6 },
      { categoryId: 1107, name: '크로스백', displayOrder: 7 },
      { categoryId: 1108, name: '캐리어/여행가방', displayOrder: 8 },
      { categoryId: 1109, name: '보스턴백', displayOrder: 9 },
      { categoryId: 1110, name: '웨이스트백', displayOrder: 10 },
      { categoryId: 1111, name: '클러치', displayOrder: 11 },
      { categoryId: 1112, name: '기타 가방', displayOrder: 12 },
      { categoryId: 1113, name: '가방 악세사리', displayOrder: 13 },
    ],
  },
];
