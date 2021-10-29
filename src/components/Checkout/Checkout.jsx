import "./Checkout.css";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import TotalPrice from "../TotalPrice/TotalPrice";
import axios from 'axios';


function Checkout() {

  const dispatch = useDispatch();

  const customerInfo = useSelector((store) => store.customerInfo);
  const cart = useSelector((store) => store.cart);
  const history = useHistory();

  const totalPrice = () => {
    let total = 0;
    for (let item of cart) {
      total += Number(item.price);
    }
    return total;
  };

  const newOrder = {
    customer_name: customerInfo.customer_name,
    street_address: customerInfo.street_address,
    city: customerInfo.city,
    zip: customerInfo.zip,
    type: customerInfo.type,
    total: totalPrice(),
    pizzas: cart
  }

  const handleCheckout = (e) => {
    e.preventDefault();

    axios({
      method: 'POST', 
      url:'/api/order',
      data: newOrder
    }).then(response => {
      console.log('POST response: ', response);
      fetchOrders();
    })
  }
  



  const fetchOrders = () =>{
    axios.get('/api/order')
          .then((response) => {
            dispatch({
              type: 'ADD_ORDER',
              payload: response.data
            })
            dispatch({
              type: 'CLEAR_CART',
            })
            dispatch({
              type: 'CLEAR_CUSTOMER',
            })
          }).catch(err => {
            console.log('Error on GET: ', err);
          })
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
        {/* <h5>{newOrder.pizza}</h5> */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((pizza, i )=> {
              return(
                <tr key={i}>
                <td>{pizza.name}</td>
                <td>${pizza.price}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
        <h3>{<TotalPrice />}</h3>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </>
  );
}


export default Checkout;
