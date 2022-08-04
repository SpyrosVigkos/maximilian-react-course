import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredMail, setEnteredMail] = useState("");

  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredMailIsTouched, setEnteredMailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredMailIsValid =
    /\S+@\S+\.\S+/.test(enteredMail) && enteredMail.trim() !== "";
  const mailInputIsInvalid = !enteredMailIsValid && enteredMailIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const mailInputChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
    if (!nameInputIsInvalid) {
      return;
    }
  };
  const mailInputBlurHandler = (event) => {
    setEnteredMailIsTouched(true);
    if (!mailInputIsInvalid) {
      return;
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredMailIsTouched(true);
    if (!enteredNameIsValid || !enteredMailIsValid) {
      return;
    }
    setEnteredNameIsTouched(false);
    setEnteredMailIsTouched(false);
    setEnteredName("");
    setEnteredMail("");
  };

  const nameInputClasses =
    !nameInputIsInvalid || !nameInputIsInvalid
      ? "form-control"
      : "form-control invalid";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={mailInputChangeHandler}
          onBlur={mailInputBlurHandler}
          value={enteredMail}
        />
        {mailInputIsInvalid && (
          <p className="error-text">Name must not be empty and without @.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
