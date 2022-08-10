// import storeItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import { StoreItem, StoreItemProps } from "../components/StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Store() {
  const { getProducts } = useShoppingCart();

  return (
    <>
      <h1>Store</h1>
      <Row
        xs={1}
        md={3}
        lg={4}
        className="gap-3 justfiy-content-center align-items-center"
      >
        {getProducts.map((item: StoreItemProps) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
