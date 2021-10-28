import { useState } from "react";


function PizzaListItem ({pizza}) {

    let [toggle, setToggle] = useState(true);

    function changeButton () {
        setToggle(!toggle);
    } // end changeButton

    return (
        <div> // tile div 

            <div> // picture div
                <img src={pizza.image_path} alt="" />
            </div>

            <div> // Description / Price div 
                <p>{pizza.description}</p>
            </div>

            <div> // button div
                {toggle ? (<button onClick={changeButton}>ADD</button>) : (<button onClick={changeButton}>REMOVE</button>)}
            </div>
        </div>
    )
}

export default PizzaListItem;