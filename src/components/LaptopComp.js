import React from "react";
import { connect } from "react-redux";
import { sellLaptop } from "../redux/actions/action";
const LaptopComp = (props) => {
  const [value, setValue] = React.useState("");
  return (
    <div className="container">
      <h2>Laptops -- Pure Redux -- </h2>
      <h3>Number of Laptops : {props.numberOfLaptops}</h3>{" "}
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={()=>(props.sellLaptop(value))}>Sell Laptop</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numberOfLaptops: state.laptop.numberOfLaptops,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sellLaptop: (a) => dispatch(sellLaptop(a)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LaptopComp);
