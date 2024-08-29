import Button from "../../components/Button";
import { IProduct } from "../../interfaces";
import ProductNowChild from "../ProductNowChild";
import "./index.css";

interface ProductProps {
  product: IProduct;
  index: number;
}

const ProductNow = ({ product, index }: ProductProps) => {
  return (
    <div className="product-item">
      <li className="product-now">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        {index === 0 && (
          <div className="wrapper-description">
            <span className="price">${product.price}</span>
            <span className="description">{product.title}</span>
          </div>
        )}
        <Button
          backgroundColor={index === 0 ? "red" : "white"}
          color={index === 0 ? "white" : "red"}
          name="Buy Now"
        />
      </li>
      <ul className="shop-now-children">
        {product.children?.map((product: IProduct, index) => {
          return <ProductNowChild index={index} product={product} />;
        })}
      </ul>
    </div>
  );
};

export default ProductNow;
