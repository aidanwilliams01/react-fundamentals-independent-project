import React from "react";
import PropTypes from "prop-types";

function Coffee(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name}</h3>
        <p><em>{props.origin}</em></p>
        <p><em>{props.price}</em></p>
        <p><em>{props.roast}</em></p>
        {/* {props.quantity > 0 &&
          <p>In stock: {props.quantity}</p>
        } */}
        {props.quantity == 0 &&
          <p><strong>Out of Stock</strong></p>
        }
      </div>
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;