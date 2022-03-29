import Paragraph from "./components/Paragraph";
import "./App.css";

let social = ["Facebook", "Instagram", "Twitter"];

function App() {
  return (
    <div className="App">
      <h1>WCS React Page</h1>
      <h4>Where magic coding happens</h4>
      <Paragraph />
      <Paragraph />
      <button>Enter</button>
      <button>Exit</button>
      <Paragraph />
      <footer>
        <ul>
          {/* {social.map(function (element) {
            return <li>This is my social network: {element}</li>;
          })} */}
          {social.map((element) => (
            <li>This is my social network: {element}</li>
          ))}
        </ul>
      </footer>
      <Paragraph />
    </div>
  );
}

export default App;
