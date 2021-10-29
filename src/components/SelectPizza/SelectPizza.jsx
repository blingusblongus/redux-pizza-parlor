
import PizzaListItem from "../PizzaListItem/PizzaListItem"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import Header from "../Header/Header";


function SelectPizza() {
    const pizzaList = useSelector(store => store.pizzaList)
    const history = useHistory();
    // console.log('SelectPizza', pizzaList);

    const toInfo = () => {
        console.log('inside toInfo');
        history.push('/info')
    } // end toInfo

    return (
        <>
            <header>
                <Header display={true} />
            </header>
            <div className="container">
                {pizzaList.map((pizza) => {
                    return <PizzaListItem pizza={pizza} key={pizza.id} />;
                })}
            </div>
            <div>
                <button onClick={toInfo}>NEXT</button>
            </div>
        </>
    );

} // end SelectPizza

export default SelectPizza;
