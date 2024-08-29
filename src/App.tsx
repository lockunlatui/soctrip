import "./App.css";
import Button from "./components/Button";
import Header from "./containers/Header";
import Product from "./containers/Product";
import ProductNow from "./containers/ProductNow";
import { IProduct } from "./interfaces";

const products: IProduct[] = [
  {
    title: "Khăn tay cao cấp mk 100% cotton HK03 nhiều màu",
    sold: 4,
    price: 25.342,
    image: `https://chanrathanhthuy.com/wp-content/uploads/2023/03/tim-hieu-khan-cotton-1-1.jpg`,
  },
  {
    title: "Khăn tay cao cấp mk 100% cotton HK03 nhiều màu",
    sold: 4,
    price: 25.342,
    image: `https://chanrathanhthuy.com/wp-content/uploads/2023/03/tim-hieu-khan-cotton-1-1.jpg`,
  },
  {
    title: "Khăn tay cao cấp mk 100% cotton HK03 nhiều màu",
    sold: 4,
    price: 25.342,
    image: `https://chanrathanhthuy.com/wp-content/uploads/2023/03/tim-hieu-khan-cotton-1-1.jpg`,
  },
];

const productsNow: IProduct[] = [
  {
    title: "Khăn tay cao cấp mk 100% cotton HK03 nhiều màu",
    sold: 4,
    price: 50,
    image: `https://chanrathanhthuy.com/wp-content/uploads/2023/03/tim-hieu-khan-cotton-1-1.jpg`,
    children: [
      {
        title: "Khăn tay cao cấp mk 100% cotton HK03 nhiều màu",
        sold: 4,
        price: 0,
        image: `https://chanrathanhthuy.com/wp-content/uploads/2023/03/tim-hieu-khan-cotton-1-1.jpg`,
      },
      {
        title: "Khăn tay cao cấp mk 100% cotton HK03 nhiều màu",
        sold: 4,
        price: 0,
        image: `https://chanrathanhthuy.com/wp-content/uploads/2023/03/tim-hieu-khan-cotton-1-1.jpg`,
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <ul className="products">
        {products.map((product: IProduct) => {
          return <Product product={product} />;
        })}
      </ul>
      <section className="wrapper-shop-now">
        <div className="wrapper-btn-shop-now">
          <Button name="Shop Now" backgroundColor="black" color="white" />
        </div>
        <ul className="shop-now">
          {productsNow.map((product: IProduct, index) => {
            return <ProductNow index={index} product={product} />;
          })}
        </ul>
        <div className="footer">
          <div className="content">
            <h3>FOLLOW ALONG WITH US</h3>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
