import "./App.css";
import Todos from "./componets/Todos";
function App() {
  return (
    <div>
      <Todos items={["Learn React", "Learn TS", "Learn JS"]} />
    </div>
  );
}

export default App;
