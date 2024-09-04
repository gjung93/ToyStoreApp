import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import ProductDisplay from "./ProductDisplay";
import { useSelector } from "react-redux";

export default function ProductList({ makeVisible }) {
  //Accessing product from the Redux store using the useSelector hook
  const product = useSelector((state) => state.product.product);

  return (
    <div>
      <h2 className="header"> Products</h2>
      <Row md={2} xs={1} lg={3}>
        {product.map((items) => (
          // Mapping each product item and displaying it according to ProductDisplay
          <ProductDisplay
            key={items.id}
            items={items}
            option={items.options}
            makeVisible={makeVisible}
          />
        ))}
      </Row>
    </div>
  );
}
