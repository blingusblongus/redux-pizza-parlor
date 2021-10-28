import "./TotalPrice.css";
import { useSelector } from "react-redux";

function TotalPrice() {
  
  const cart = useSelector((store) => store.cart);

  const totalPrice = () => {
    let total = 0;
    for (let item of cart) {
      total += Number(item.price);
    }
    return total.toFixed(2);
  };

  return (
      <h4 className="Total-Price">CartIcon Total: ${totalPrice()}</h4>
  );
}

export default TotalPrice;
