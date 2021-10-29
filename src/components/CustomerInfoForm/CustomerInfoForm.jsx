import "./CustomerInfoForm.css";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CustomerInfoForm(props) {
  const info = useSelector((store) => store.customerInfo);
  const dispatch = useDispatch();
  const [zip, setZip] = useState(info.zip || "");
  const [city, setCity] = useState(info.city || "");
  const [name, setName] = useState(info.customer_name || "");
  const [address, setAddress] = useState(info.street_address || "");
  // type is Pickup by default
  const [type, setType] = useState(info.type || "Pickup");

  const history = useHistory();
  const toHome = () => {
    console.log("inside toHome");
    history.push("/");
  }; // end toInfo

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      customer_name: name,
      street_address: address,
      city: city,
      zip: zip,
      type: type,
    };

    console.log("Order submitted:");
    console.log(order);

    dispatch({
      type: "ADD_CUSTOMER",
      payload: order,
    });

    history.push("/checkout");
  };

  const handleRadio = (e) => {
    setType(e.target.value);
  };

  return (
    <div id="info-page">
      <header>
        <Header display={true} />
      </header>
      <h2>Step 2: Customer Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex-container">
          <Button
            onClick={toHome}
            variant="contained"
            endIcon={<ArrowBackIosIcon />}
          >
            Back
          </Button>
          <div id="text-container">
            <ul className="custInfoInputs">
              <li>
                {" "}
                <TextField
                  required
                  className="input"
                  id="outlined-required"
                  label="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />{" "}
              </li>
              <li>
                <TextField
                  required
                  className="input"
                  id="outlined-required"
                  label="Street Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></TextField>
              </li>
              <li>
                <TextField
                  required
                  className="input"
                  id="outlined-required"
                  label="City"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                ></TextField>
              </li>
              <li>
                <TextField
                  required
                  className="input"
                  id="outlined-required"
                  label="Zip"
                  onChange={(e) => setZip(e.target.value)}
                  value={zip}
                ></TextField>
              </li>
            </ul>
          </div>
          {/* Radio buttons update state onChange, using value attr */}
          <div id="radio-container">
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Type</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="controlled-radio-buttons-group"
                  value={type}
                  onChange={handleRadio}
                >
                  <FormControlLabel
                    value="Pickup"
                    control={<Radio />}
                    label="Pickup"
                  />
                  <FormControlLabel
                    value="Delivery"
                    control={<Radio />}
                    label="Delivery"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <Button
            type="submit"
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CustomerInfoForm;
