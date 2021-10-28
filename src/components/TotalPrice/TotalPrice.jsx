import "./TotalPrice.css";
import { useSelector } from "react-redux";

function TotalPrice() {
  const cart = useSelector((store) => store.cart);

  const totalPrice = () => {
    let total = 0;
    for (item of cart) {
      total += item.cost;
    }
    return total;
  };

  return (
    <>
      <h4 className="Total-Price">CartIcon Total: {totalPrice()}</h4>
    </>
  );
}

export default TotalPrice;
