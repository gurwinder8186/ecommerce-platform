export interface Category {
  id: number;
  name: string;
  description?:string;
}
export interface DesktopPC {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  specifications: {
    processor: string;
    ram: string;
    storage: string;
    gpu?: string;
    os: string;
    [key: string]: string;
  };
  stock: number;
  brand: string;
  model: string;
  warranty: string;
  category_id: number;
}
