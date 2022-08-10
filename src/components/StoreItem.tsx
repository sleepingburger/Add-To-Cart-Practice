import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

export type StoreItemProps = {
  id: number;
  category: string;
  description: string;
  title: string;
  price: number;
  image: string;
};

export function StoreItem({
  id,
  title,
  price,
  image,
  description,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="mh-100">
      <Card.Img
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-5">{title}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="text-muted" style={{ fontSize: "1rem" }}>
          {description}
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              onClick={() => {
                increaseCartQuantity(id);
              }}
            >
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span
                    className="fs-5"
                    style={{
                      maxHeight: "80px",
                      padding: "10px 15px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {quantity} in cart
                  </span>
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
