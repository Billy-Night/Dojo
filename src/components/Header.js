const Header = function (props) {
  console.log("do I get props?", props);
  return (
    <>
      <h1>{props.title}</h1>
      <h4>{props.subtitle}</h4>
      {/* <p>{props.pizza}</p> */}
    </>
  );
};

export default Header;
