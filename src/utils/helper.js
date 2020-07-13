export const obtainTotal = (income, expense) => {
  let valueIncome = 0;
  let valueExpense = 0;

  income.forEach((element) => {
    valueIncome += element.value;
  });

  expense.forEach((element) => {
    valueExpense += element.value;
  });

  return valueIncome - valueExpense;
};
