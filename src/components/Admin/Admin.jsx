import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import MoreDetails from "../MoreDetails/MoreDetails";
import axios from 'axios';

function Admin({fetchOrders}) {

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
        console.log(orders[i])
        let id = orders[i].id;

        axios.get(`/admin/${id || ''}`)
            .then(response => {
                console.log(`GET at ${id} success` );
                console.log(response.data);
            }).catch(err => {
                console.log(`GET at ${id} err`);
                console.log(err);
              })
        // setMoreDetailsToggle(true);
        // setActiveOrder(orders[i]);
    } // end handleMoreDetails

    const clearDetails = () => {
        console.log('clicked clearDetails');
        setMoreDetailsToggle(false);
    } // end clearDetails

    useEffect(() => {
        fetchOrders();
    }, []);
    
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
                                // onClick={() => handleMoreDetails(i)}
                                key={i}>
                                <td>{orderItem.customer_name}</td>
                                <td>{orderItem.type}</td>
                                <td>{orderItem.total}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {/* <div>
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

            </div> */}

            <button onClick={toHome}>HOME</button>
        </>
    )
} // end Admin

export default Admin;