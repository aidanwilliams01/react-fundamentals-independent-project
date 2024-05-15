import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Name: </label>
        <input
          type='text'
          name='name' />
        <br></br>
        <label>Origin: </label>
        <input
          type='text'
          name='origin' />
        <br></br>
        <label>Price: </label>
        <input
          type='number'
          name='price'
          min=".01"
          step=".01" />
        <br></br>
        <label>Roast: </label>
        <select name="roast">
          <option value="">--Please choose an option--</option>
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="dark">Dark</option>
        </select>
        <input
          type='hidden'
          name='quantity'
          value="130" />
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;