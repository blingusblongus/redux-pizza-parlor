import { useState } from "react";
import "./PizzaListItem.css";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";

function PizzaListItem({ pizza }) {
  let [toggle, setToggle] = useState(true);
  // let [newPizza, setNewPizza] = useState('');

  const dispatch = useDispatch();

  function changeButton() {
    setToggle(!toggle);
  } // end changeButton

  const addPizza = () => {
    // setNewPizza(pizza)
    console.log("Add clicked");
    dispatch({
      type: "ADD_PIZZA",
      payload: pizza,
    });
    changeButton();
  }; // addPizza

  const removePizza = () => {
    console.log("Remove clicked");
    dispatch({
      type: "REMOVE_PIZZA",
      payload: pizza,
    });
    changeButton();
  }; // end remove

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

  return (
    <div className="cardContainer">
      <div className="card">
        <Card variant="outlined" sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="350"
            image={pizza.image_path}
            alt="pic of pizza"
            color="primary"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pizza.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {pizza.description}
            </Typography>
          </CardContent>
          <CardActions className="bottomFlexContainer">
            {toggle ? (
              <Button
                variant="outlined"
                endIcon={<AddShoppingCartIcon />}
                aria-label="add to shopping cart"
                onClick={addPizza}
                // onChange={(event) => set NewPizza(event.target.value)}
                value={pizza}
              >
                Add to
              </Button>
            ) : (
              <Button variant="outlined" onClick={removePizza}>
                REMOVE
              </Button>
            )}
            <Typography sx={{ mb: 0 }} color="#800000">
              ${pizza.price}
            </Typography>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default PizzaListItem;
