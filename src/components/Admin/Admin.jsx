import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function Admin () { 

    const orders = useSelector(state => state.orders)
    const history = useHistory();

    const toHome = () => {
        history.push('/');
    } // end toHome
    
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>CUSTOMER</th>
                    <th>TOTAL COST</th>
                    <th>TYPE</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((orderItem, i) => {
                    <tr key={i}>
                    <td>{orderItem.customer_name}</td>
                    <td>{orderItem.totalPrice}</td>
                    <td>{orderItem.type}</td>
                </tr>
                })}
            </tbody>
        </table>
        <button onClick={toHome}>HOME</button>
        </>
    )
} // end Admin

export default Admin;