export class Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  gender: string;
  category: string;
  size: number[];
  color: string[];
  discountPrice?: number;
  is_in_inventory: boolean;
  items_left: number;
  imageURL: string;
  slug: string;
}
