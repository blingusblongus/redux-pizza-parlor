import PizzaListItem from "../PizzaListItem/PizzaListItem"
import { useSelector } from "react-redux"

function SelectPizza () {

    const pizzaList = useSelector(store => store.pizzaList)
    // console.log('SelectPizza', pizzaList);
    
    return (
        <div>
            {pizzaList.map((pizza) => {
                return (
                    <PizzaListItem 
                    pizza={pizza}
                    key={pizza.id}/>
                )
            })}
        </div>
    )
} // end SelectPizza

export default SelectPizza;

