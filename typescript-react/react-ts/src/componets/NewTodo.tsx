import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInputRef} type="text" name="" id="text" />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
