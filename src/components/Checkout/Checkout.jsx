import "./Checkout.css";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import TotalPrice from "../TotalPrice/TotalPrice";

function Checkout() {
  const customerInfo = useSelector((store) => store.customerInfo);

  let history = useHistory();

  const handleCheckout = () => {
    history.push("/");
  };

  const toInfo = () => {
    history.push('/info')
  } // end toInfo

  return (
    <>
      <header>
        <Header display={false} />
      </header>
      <div>
        <h2>Step 3: Checkout</h2>
        <ul className="addressList">
          <li>{customerInfo.customer_name}</li>
          <li>{customerInfo.street_address}</li>
          <li>
            {customerInfo.city} {customerInfo.zip}
          </li>
        </ul>
        <h4>For {customerInfo.type}</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{customerInfo.name}</td>
              <td>{customerInfo.price}</td>
            </tr>
          </tbody>
        </table>
        <TotalPrice />
        <button onClick={toInfo}>Back</button>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </>
  );
}

export default Checkout;
