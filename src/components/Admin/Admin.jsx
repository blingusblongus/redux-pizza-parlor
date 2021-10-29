import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useState } from "react";
import MoreDetails from "../MoreDetails/MoreDetails";

function Admin() {

    const orders = useSelector(state => state.orders)
    const history = useHistory();
    const [moreDetailsToggle, setMoreDetailsToggle] = useState(false);
    const [removeMoreDetails, setRemoveMoreDetails] = useState(false);
    const [activeOrder, setActiveOrder] = useState('')

    const toHome = () => {
        history.push('/');
    } // end toHome

    const handleMoreDetails = (i) => {
        console.log('clicked handleMoreDetails');
        setMoreDetailsToggle(true);
        setActiveOrder(orders[i]);
    } // end handleMoreDetails

    const clearDetails = () => {
        console.log('clicked clearDetails');
        setMoreDetailsToggle(false);
    } // end clearDetails
    
    console.log(activeOrder);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>CUSTOMER</th>
                        <th>TYPE</th>
                        <th>TOTAL COST</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((orderItem, i) => {
                        return (
                            <tr
                                onClick={() => handleMoreDetails(i)}
                                key={i}>
                                <td>{orderItem.customer_name}</td>
                                <td>{orderItem.type}</td>
                                <td>{orderItem.totalPrice}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div>
                {
                moreDetailsToggle ? 
                <>
                <MoreDetails activeOrder={activeOrder}/> 
                <button onClick={clearDetails}>CLEAR</button> 
                </> 
                : 
                <p></p>
                }
                

                <button>CLEAR</button>

            </div>

            <button onClick={toHome}>HOME</button>
        </>
    )
} // end Admin

export default Admin;