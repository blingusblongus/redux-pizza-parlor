import PizzaListItem from "../PizzaListItem/PizzaListItem";
import { useSelector } from "react-redux";
import Header from "../Header/Header";

function SelectPizza() {
  const pizzaList = useSelector((store) => store.pizzaList);
  console.log("SelectPizza", pizzaList);

  return (
    <>
      <header>
        <Header display={true} />
      </header>
      <div>
        {pizzaList.map((pizza) => {
          return <PizzaListItem pizza={pizza} key={pizza.id} />;
        })}
      </div>
    </>
  );
} // end SelectPizza

export default SelectPizza;
