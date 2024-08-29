export interface IProduct {
  title: string;
  sold: number;
  price: number;
  image: string;
  children?: IProduct[];
}
