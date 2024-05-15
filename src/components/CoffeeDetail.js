import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props;

  function decrement() {
    props.onEditCoffee({name: coffee.name, origin: coffee.origin, price: coffee.price, roast: coffee.roast, quantity: (coffee.quantity - 1).toString(), id: coffee.id});
  }

  // function restock(event) {
  //   event.preventDefault();
  //   props.onEditCoffee({name: coffee.name, description: coffee.description, quantity: (parseInt(coffee.quantity) + parseInt(event.target.quantity.value)).toString(), id: coffee.id});
  // }

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name}</h3>
      <p><em>{coffee.origin}</em></p>
      <p><em>{coffee.price}</em></p>
      <p><em>{coffee.roast}</em></p>
      {coffee.quantity > 0 &&
        <p>In stock: {coffee.quantity}</p>
      }
      {coffee.quantity === 0 &&
        <p><strong>Out of Stock</strong></p>
      }
      {coffee.quantity > 0 &&
        <button onClick={decrement}>Sell</button>
      }
      {/* <form onSubmit={restock}>
        <input type='number' name='quantity' min="1" />
        <button>Restock</button>
      </form> */}
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