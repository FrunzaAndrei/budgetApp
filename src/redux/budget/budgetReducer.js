import * as actionType from "./budgetTypes";
import { obtainTotal } from "../../utils/helper";

const initialState = {
  totalMoney: 0,
  income: [{ value: 0 }],
  expenses: [{ value: 0 }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_MONEY:
      return {
        ...state,
        income: [
          ...state.income,
          { name: action.payload.name, value: action.payload.value },
        ],
      };

    case actionType.SPEND_MONEY:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          { name: action.payload.name, value: action.payload.value },
        ],
      };
    case actionType.TOTAL_MONEY:
      return {
        ...state,
        totalMoney: obtainTotal(state.income, state.expenses),
      };

    default:
      return state;
  }
};

export default reducer;
