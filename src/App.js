import "./App.css";
import background from "./assets/backgroundImage.jpg";
import { Home } from "./Pages";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Home />
    </div>
  );
}

export default App;
