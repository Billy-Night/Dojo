import StudentDetails from "./StudentDetails";

const StudentInfo = (props) => (
  <>
    <StudentDetails firstName={props.name} location={props.location} />
    {/* <StudentAbout /> */}
    <h5>About conditions of the student</h5>
    <p>{props.info}</p>
    <button>Accept student</button>
    <hr />
  </>
);

export default StudentInfo;
