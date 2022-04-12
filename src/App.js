import React, {useState, useEffect} from "react"; 



function App() {
  let [joke, setJoke] = useState({});
  let [joke2, setJoke2] = useState({});
  let [winner, setWinner] = useState(false);


  useEffect(() => {
  
  fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) => {
    setJoke(data);
  });
  fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) => {
        setJoke2(data);
      });
}, []);

const handleclick1 = (event) => {
  setWinner(event.target.value);
console.log("clicked!")
};

const handleclick2 = (event) => {
  setWinner(event.target.value);
console.log("clicked!")
};

  return (
    <div className="App">
      <h1>React project</h1>


      <p>This is Chucks first joke: {joke.value}</p>
      <button onClick={handleclick1}> Select this joke!</button>
      <p>This is his second joke: {joke2.value}</p>
      <button onClick={handleclick2}> Select this joke!</button>
    </div>
  );
}

export default App;
