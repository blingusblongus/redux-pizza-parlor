import "./TotalPrice.css";
import { useSelector } from "react-redux";

function TotalPrice() {
  
  const cart = useSelector((store) => store.cart);

  const totalPrice = () => {
    let total = 0;
    for (let item of cart) {
      total += Number(item.price);
    }
    return total;
  };

  return (
    <>
      <div className="Total-Price">CartIcon Total: ${totalPrice()}</div>
    </>
  );
}

export default TotalPrice;
