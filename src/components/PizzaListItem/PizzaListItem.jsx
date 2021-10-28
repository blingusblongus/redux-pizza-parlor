import { useState } from "react";


function PizzaListItem ({pizza}) {

    let [toggle, setToggle] = useState(true);

    function changeButton () {
        setToggle(!toggle);
    } // end changeButton

    console.log('this is pizza', pizza);
    return (
        <div className="tile">
            <div>
                <p>{pizza.image_path}</p>
                <img src={pizza.image_path} alt="pic of pizza" />
            </div>

            <div>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
            </div>

            <div>
                {toggle ? (<button onClick={changeButton}>ADD</button>) : (<button onClick={changeButton}>REMOVE</button>)}
            </div>
        </div>
    )
}

export default PizzaListItem;