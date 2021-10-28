import "./Checkout.css";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";


function Checkout() {

  const customerInfo = useSelector((store) => store.customerInfo);
  const cart = useSelector((store) => store.cart);
  const history = useHistory();

  const makePizzaArray = () => {
    let pizzaOrder = []
    for(let pizza of cart) {
        pizzaOrder.push({id: pizza.id, quantity: 1})
    }
    return pizzaOrder
  }


  const newOrder = {
    customer_name: customerInfo.customer_name,
    street_address: customerInfo.street_address,
    city: customerInfo.city,
    zip: customerInfo.zip,
    type: customerInfo.type,
    pizza: makePizzaArray()
  }

  



  const handleCheckout = () => {
    dispatchEvent({
      type: 'ADD_ORDER',
      payload: newOrder
    })
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
            {newOrder.pizza.map(pizza => (
              <tr>
                <td>pizza.name</td>
                <td>pizza.price</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total: {customerInfo.total}</h3>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </>
  );
}

export default Checkout;
