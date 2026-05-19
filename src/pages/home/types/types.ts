export interface ShortCut {
  shortcutId: number;
  name: string;
  imageUrl: string;
  categoryId: number;
}

export interface Section {
  sectionId: number;
  title: string;
  description: string;
  heroImageUrl: string;
  selections: Selection[];
}

export interface Selection {
  selectionId: number;
  imageUrl: string;
  title: string;
  description: string;
  products: Product[];
}

export interface Product {
  productId: number;
  imageUrl: string;
  brandName: string;
  name: string;
  saleRate: number;
  price: number;
  tags: string[];
  likeCount: number;
  isLiked: boolean;
}

export interface SubCategory {
  subCategoryId: number;
  name: string;
}

export interface MiddleCategory {
  middleCategoryId: number;
  name: string;
  subCategories: SubCategory[];
}

export interface TopCategory {
  topCategoryId: number;
  name: string;
  middleCategories: MiddleCategory[];
}
