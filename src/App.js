import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Welcome from "./components/Welcome";
import "./App.css";

let social = ["Facebook", "Instagram", "Twitter"];

function App() {
  return (
    <div className="App">
      <Header
        title="this is my title"
        subtitle="some subtitle"
        pizza="Pizza is great!"
      />
      <Header title="marc title" subtitle="marc subtitle" />
      <Header title="extra stuff" subtitle="more extra subtitle" />
      <Welcome />
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
