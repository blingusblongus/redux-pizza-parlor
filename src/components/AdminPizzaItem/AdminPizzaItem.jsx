

function AdminPizzaItem({pizzas}) {
    return (
        <ul>
            {pizzas.map((pizza, i) => {
                return (
                    <li key={i}>{pizza.name}</li>
                )
            })}
        </ul>
    )
} // end AdminPizzaItem

export default AdminPizzaItem