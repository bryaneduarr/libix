// Product
export type Product = {
  idProduct: number;
  name: string;
  description: string;
  stock: number;
  price: number;
  image: string;
};

//Product with quantity
export type ProductItem = Product & {
  quantity: number;
};
