import "./App.css";
import BMI from "./BMI";
import CDate from "./CDate";
import Header from "./Header";
import Input from "./Input";
import List from "./List";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__input">
        <Input />
      </div>
      <div className="app__cDate">
        <CDate />
      </div>
      <div className="app__bottom">
        <div className="app__list">
          <List />
        </div>
        <div className="app__bmi">
          <BMI />
        </div>
      </div>
    </div>
  );
}

export default App;
