import logo from './logo.svg';
import './App.css';

import Dropdown from "./Components/Dropdown"

function App() {
  let dropdownList = [
    {"id": 1, "cities": "Mumbai"},
    {"id": 2, "cities": "Manipur"},
    {"id": 3, "cities": "Lucknow"},
    {"id": 4, "cities": "Delhi"},
    {"id": 5, "cities": "Durgapur"},
    {"id": 6, "cities": "Chennai"}
  ]
  return (
    <div className="App">
        <Dropdown dropdownList={dropdownList}/>

    </div>
  );
}

export default App;
