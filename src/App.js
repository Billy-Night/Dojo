import "./App.css"
import React, {useState, useEffect} from "react"; 

function App() {
  let [joke, setJoke] = useState("");
  let [joke2, setJoke2] = useState("");
  let [winner, setWinner] = useState("");

  function refresh() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      });
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
          setJoke2(data.value);
      });
    setWinner("");
  }

  useEffect(() => {
    refresh();
  }, []);

  const handleClick = (selectedJoke) => {
    setWinner(selectedJoke);
  };

  return (
    <div className="App">
      <h1>React project</h1>
      {winner === "" ? (
      <>
      <p>This is Chucks first joke: {joke}</p>
      <button onClick={() => handleClick(joke)}> Select this joke!</button>
      <p>This is his second joke: {joke2}</p>
      <button onClick={() => handleClick(joke2)}> Select this joke!</button>
      </>
      ) : (
      <>
      <h1>The funniest joke was: {winner}</h1>
      <button onClick={refresh}>Refresh</button>
      </>
      )}
    </div>
  );
}

export default App;
