import { useState } from "react";
import './CustomerInfoForm.css';

function CustomerInfoForm(props) {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    
    //This will need to obtain the cart info,
    //combine it with the form info,
    //and DISPATCH it to the order reducer
    const handleSubmit = () => {


    }

    return (
        <div>
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input className="input" type="text" placeholder="Name" 
                    onChange={(e) => setName(e.target.value)}
                    value={name}></input>
                    <input className="input" type="text" 
                    placeholder="Street Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}></input>
                    <input className="input" type="text" placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}></input>
                    <input className="input" type="text" placeholder="Zip"
                    onChange={(e) => setZip(e.target.value)}
                    value={zip}></input>
                </div>
                <div>
                    <input type="radio"></input>
                </div>
            </form>
        </div>
    )
}


export default CustomerInfoForm;