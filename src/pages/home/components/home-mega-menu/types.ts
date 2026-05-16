export interface SubCategory {
  subCategoryId: number;
  name: string;
}

export interface MiddleCategory {
  middleCategoryId: number;
  name: string;
  subCategories: SubCategory[];
}
