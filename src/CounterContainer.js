import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispatchToProps = (dispatch) => ({
  onAddOne: () => dispatch({ type: "ADD-ONE" }),
  onAddTen: () => dispatch({ type: "ADD-TEN" }),
  onRemoveOne: () => dispatch({ type: "REMOVE-ONE" }),
  onRemoveTen: () => dispatch({ type: "REMOVE-TEN" }),
  onReset: () => dispatch({ type: "RESET" }),
});

const CounterContainer = ({ counter, onAddOne, onAddTen, onRemoveOne, onRemoveTen, onReset}) => (
  <div>
    <p>{counter}</p>
    <button onClick={onAddOne}>+</button>
    <button onClick={onRemoveOne}>-</button>
    <button onClick={onAddTen}>+10</button>
    <button onClick={onRemoveTen}>-10</button>
    <button onClick={onReset}>RESET</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
