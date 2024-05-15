import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props;

  function decrement() {
    props.onEditCoffee({name: coffee.name, origin: coffee.origin, price: coffee.price, roast: coffee.roast, quantity: (coffee.quantity - 1).toString(), id: coffee.id});
  }

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name}</h3>
      <p>Origin: {coffee.origin}</p>
      <p>Price: ${coffee.price}</p>
      <p>Roast: {coffee.roast}</p>
      {coffee.quantity > 0 &&
        <p>In stock: {coffee.quantity}</p>
      }
      {coffee.quantity === 0 &&
        <p><strong>Out of Stock</strong></p>
      }
      {coffee.quantity > 0 &&
        <button onClick={decrement}>Sell</button>
      }
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;