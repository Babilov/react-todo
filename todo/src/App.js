import './App.css';
import { MyDescription } from './components/UI/description/MyDescription';
import { MyMainBlock } from './components/UI/mainBlock/MyMainBlock';


function App() {
  return (
    <div className="App">
      <MyDescription></MyDescription>
      <MyMainBlock></MyMainBlock>
    </div>
  );
}

export default App;
