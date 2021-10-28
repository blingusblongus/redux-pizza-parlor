import { useState } from "react";
import './CustomerInfoForm.css';
import { useDispatch } from "react-redux";

function CustomerInfoForm(props) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    // type is Pickup by default
    const [type, setType] = useState('Pickup');

    const handleSubmit = () => {
        const order = {
            customer_name: name,
            street_address: address,
            city: city,
            zip: zip,
            type: type
        }

        console.log('Order submitted:');
        console.log(order);

        dispatch({
            type: 'ADD_ORDER',
            payload: order
        })
    }

    const handleRadio = (e) => {
            setType(e.target.value);
    }

    return (
        <div id="info-page">
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex-container">
                    <div id="text-container">
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

                    {/* Radio buttons update state onChange, using value attr */}
                    <div id="radio-container">
                        <div>
                            <input type="radio" id="pickup" name="type" 
                            onChange={handleRadio} defaultChecked={true}
                            value="Pickup"></input>
                            <label htmlFor="pickup">Pickup</label>
                        </div>
                        <div>
                            <input type="radio" id="delivery" name="type"
                            onChange={handleRadio}
                            value="Delivery"></input>
                            <label htmlFor="delivery">Delivery</label>
                        </div>
                        
                    </div>
                    <button type="submit">NEXT</button>
                </div>
            </form>
        </div>
    )
}


export default CustomerInfoForm;