import "./App.css";
import NewTodo from "./componets/NewTodo";
import Todos from "./componets/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
