import Button from "../../components/Button";
import { IProduct } from "../../interfaces";
import "./index.css";

interface ProductProps {
  product: IProduct;
  index: number;
}

const ProductNowChild = ({ product }: ProductProps) => {
  return (
    <div className="product-item">
      <li className="product-now-child">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />

        <Button backgroundColor={"white"} color={"red"} name="Buy Now" />
      </li>
    </div>
  );
};

export default ProductNowChild;
