import "./Checkout.css";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function Checkout() {
  const orderInfo = useSelector((store) => store.orders);

  let history = useHistory();

  const handleCheckout = () => {
    history.push("/");
  };

  return (
    <>
      <header>
        <Header display={false} />
      </header>
      <div>
        <h2>Step 3: Checkout</h2>
        <ul className="addressList">
          <li>{orderInfo.customer_name}</li>
          <li>{orderInfo.street_address}</li>
          <li>
            {orderInfo.city}, {orderInfo.zip}
          </li>
        </ul>
        <h4>For {orderInfo.type}</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{orderInfo.pizza.name}</td>
              <td>{orderInfo.pizza.cost}</td>
            </tr>
          </tbody>
        </table>
        <h3>Total: {orderInfo.total}</h3>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </>
  );
}

export default Checkout;
