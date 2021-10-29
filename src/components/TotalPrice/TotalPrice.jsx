import "./TotalPrice.css";
import { useSelector } from "react-redux";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

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
    <>
      <div className="Total-Price">
        <LocalGroceryStoreIcon />
        Total: ${totalPrice()}
      </div>
    </>
  );
}

export default TotalPrice;
