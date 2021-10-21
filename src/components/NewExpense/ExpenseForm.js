import classes from "./ExpenseForm.module.css";
import useInput from "../../hooks/use-input";

const ExpenseForm = (props) => {
  const {
    value: enteredTitle,
    isValid: enteredTitleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredAmount,
    isValid: enteredAmountIsValid,
    hasError: amountHasError,
    valueChangeHandler: amountChangeHandler,
    inputBlurHandler: amountBlurHandler,
    reset: resetAmount,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDate,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (enteredTitleIsValid && enteredAmountIsValid && enteredDateIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    resetTitle();
    resetAmount();
    resetDate();
  };

  const titleClasses = titleHasError
    ? `${classes["new-expense__control"]} ${classes["invalid"]}`
    : `${classes["new-expense__control"]}`;

  const amountClasses = amountHasError
    ? `${classes["new-expense__control"]} ${classes["invalid"]}`
    : `${classes["new-expense__control"]}`;

  const dateClasses = dateHasError
    ? `${classes["new-expense__control"]} ${classes["invalid"]}`
    : `${classes["new-expense__control"]}`;

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["new-expense__controls"]}>
        <div className={titleClasses}>
          <label>Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
          />
        </div>
        <div className={amountClasses}>
          <label>Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            onBlur={amountBlurHandler}
          />
        </div>
        <div className={dateClasses}>
          <label>Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2021-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            onBlur={dateBlurHandler}
          />
        </div>
        <div className={classes["new-expense__actions"]}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
        <div className={classes["new-expense__actions"]}>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
