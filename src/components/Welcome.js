let person = "student";
let name = "asdad";

// const greeting = function() {
//   if (person === "student") {
//     return <h2>hello student from WCS</h2>;
//   } else {
//     return <h2>hey staff member!</h2>;
//   }
// };

// const greeting = () => {
//   if (person === "student") {
//     return <h2>hello student from WCS</h2>;
//   } else if (person === "manager") {
//     return <h2>Hey lord manager</h2>;
//   } else {
//     return <h2>hey staff member!</h2>;
//   }
// };

const Welcome = () => (
  <>
    {person === "student" ? (
      <h2>hello student from WCS</h2>
    ) : (
      <h2>hey staff member!</h2>
    )}
    <hr />
    <hr />
    {name === "marc" && <h2>Hey Marc how are you?</h2>}
  </>
);

export default Welcome;
