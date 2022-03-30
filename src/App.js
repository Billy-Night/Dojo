import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import "./App.css";

let social = ["Facebook", "Instagram", "Twitter"];

function App() {
  return (
    <div className="App">
      <Header />
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
          {social.map((element, index) => (
            <li key={index}>This is my social network: {element}</li>
          ))}
        </ul>
      </footer>
      <Paragraph />
    </div>
  );
}

export default App;
