import React, { useState } from "react";
import { totalMoney, spendMoney, addMoney } from "../redux/budget/budgetAction";
import { connect } from "react-redux";
import FormInput from "./FormInput";
import CheckButton from "./CheckButton";

const ActionContainer = (props) => {
  const [addIncome, setAddIncome] = useState(true);
  const handleAddButton = (name, value) => {
    addIncome
      ? props.addMoney({ name: name, value: parseInt(value) })
      : props.spendMoney({ name: name, value: parseInt(value) });
    props.calcTotalMoney();
  };

  const handleCheckButton = () => {
    setAddIncome(!addIncome);
    console.log("addIncomoe", addIncome);
  };

  return (
    <div>
      <h1>Available Budget</h1>
      <h3>{props.totalMoney} $</h3>
      <CheckButton handleButton={handleCheckButton} />
      <FormInput handleAddButton={handleAddButton} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalMoney: state.totalMoney,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    calcTotalMoney: () => dispatch(totalMoney()),
    addMoney: (value) => dispatch(addMoney(value)),
    spendMoney: (value) => dispatch(spendMoney(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionContainer);
