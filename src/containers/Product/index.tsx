import { IProduct } from "../../interfaces";
import "./index.css";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  return (
    <li className="product">
      <img className="product-image" src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p className="sold">{product.sold} đã bán</p>
      <p className="price">đ{product.price}</p>
    </li>
  );
};

export default Product;
