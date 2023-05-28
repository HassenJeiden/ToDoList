import './App.css';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';
import RadioInputExample from './components/filtre'

function App() {
  return (
    <div >
      <Addtask />
      <RadioInputExample/>
      <ListTask />
    </div>
  );
}

export default App;
