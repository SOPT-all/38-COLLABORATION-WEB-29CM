export interface MegaMenuItem {
  categoryId: number;
  name: string;
  displayOrder: number;
}

export interface MegaMenuGroup {
  groupId: number;
  name: string;
  displayOrder: number;
  items: MegaMenuItem[];
}
