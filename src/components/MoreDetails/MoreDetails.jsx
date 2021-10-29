import AdminPizzaItem from "../AdminPizzaItem/AdminPizzaItem"

function MoreDetails({ activeOrder }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>CUSTOMER</th>
                    <th>STREET</th>
                    <th>CITY</th>
                    <th>ZIP</th>
                    <th>TYPE</th>
                    <th>TOTAL COST</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{activeOrder.customer_name}</td>
                    <td>{activeOrder.street_address}</td>
                    <td>{activeOrder.city}</td>
                    <td>{activeOrder.zip}</td>
                    <td>{activeOrder.type}</td>
                    <td>{activeOrder.totalPrice}</td>
                </tr>
            </tbody>
            <div>
                <AdminPizzaItem pizzas={activeOrder.pizzas} />
            </div>
        </table>
    )
} // end MoreDetails

export default MoreDetails;