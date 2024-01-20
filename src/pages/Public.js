import Product from "../components/Product";
import { products } from "../models/products";
import Row from "react-bootstrap/Row";


export default function Public(props) {
  const list = products;

  return (
    <div>
      <Row>
        {list.map((elem, index) => {
          return <Product obj={elem} key={index} />;
        })}
      </Row>
    </div>
  );
}
