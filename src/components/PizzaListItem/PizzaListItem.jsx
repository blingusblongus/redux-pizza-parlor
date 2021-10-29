import { useState } from "react";
import { useDispatch } from "react-redux";


function PizzaListItem ({pizza}) {

    let [toggle, setToggle] = useState(true);
    // let [newPizza, setNewPizza] = useState('');

    const dispatch = useDispatch();

    function changeButton () {
        setToggle(!toggle);
    } // end changeButton

    const addPizza = () => {
        
        // setNewPizza(pizza)
        console.log('Add clicked');
        dispatch({
            type: 'ADD_PIZZA',
            payload: {...pizza, quantity: 1}
        })
        changeButton ()
        
    } // addPizza

    const removePizza = () => {
        console.log('Remove clicked');
        dispatch({
            type: 'REMOVE_PIZZA',
            payload: pizza
        })
        changeButton ()
    } // end remove

    // console.log('this is pizza', pizza);
    return (
        <div className="tile">
            <div>
                <img src={pizza.image_path} alt="pic of pizza" />
            </div>

            <div>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
            </div>

            <div>
                {toggle ? 
                (<button 
                    onClick={addPizza}
                    // onChange={(event) => set NewPizza(event.target.value)}
                    value={pizza}>ADD</button>)
                    : 
                (<button onClick={removePizza}>REMOVE</button>)
                }
            </div>
        </div>
    )
}

export default PizzaListItem;