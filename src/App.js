import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import StudentInfo from "./components/StudentInfo";
import Welcome from "./components/Welcome";
import "./App.css";

let studentResume =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate obcaecati doloribus eius ea optio facilis laborum, sapiente illo odio, veniam cumque sed eligendi quisquam delectus? Amet mollitia, nam placeat officiis est laudantium rerum exercitationem ea! Voluptatem perferendis reiciendis natus quod reprehenderit delectus aperiam inventore repellendus exercitationem earum maxime nam provident odit illo quisquam assumenda laudantium a, sit temporibus consectetur quo magni officia tenetur voluptatibus. Vel ducimus voluptas sed, eveniet molestias rerum harum labore repudiandae perferendis molestiae nihil ipsam iste qui ab cum esse laborum repellendus tempore blanditiis provident. Tenetur, a!";

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
      <StudentInfo name="Marc" location="Barcelona" info={studentResume} />
      <StudentInfo name="Billy" location="France" info={studentResume} />
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
