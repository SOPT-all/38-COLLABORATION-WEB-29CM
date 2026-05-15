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
