import "./App.css";
import Timer from "./components/Timer";

function App() {
  const hoursMinSecs = { hours: 0, minutes: 0, seconds: 5 };

  return (
    <div className="App">
      <div className="timer">
        <Timer hoursMinSecs={hoursMinSecs} />
      </div>
    </div>
  );
}

export default App;
