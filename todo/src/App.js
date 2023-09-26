import "./App.css";
import { MyDescription } from "./components/UI/Description/MyDescription";
import { MyMainBlock } from "./components/UI/MainBlock/MyMainBlock";

function App() {
  return (
    <div className="App">
      <MyDescription></MyDescription>
      <MyMainBlock></MyMainBlock>
    </div>
  );
}

export default App;
