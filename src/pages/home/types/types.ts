export type ViewerType = 'user' | 'guest';

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
