import * as typeOF from "./budgetTypes";

export const addMoney = (value) => {
  return {
    type: typeOF.ADD_MONEY,
    payload: value,
  };
};

export const spendMoney = (value) => {
  return {
    type: typeOF.SPEND_MONEY,
    payload: value,
  };
};

export const totalMoney = () => {
  return {
    type: typeOF.TOTAL_MONEY,
  };
};
