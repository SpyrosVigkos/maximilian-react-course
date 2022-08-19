import "./App.css";
import Todos from "./componets/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("Learn React"),
    new Todo("Learn TS"),
    new Todo("Learn JS"),
  ];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
