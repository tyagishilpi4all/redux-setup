import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addData } from "./store/actions/index.action";
class App extends Component {
  componentDidMount() {
    this.props.$addData({ name: "sunny" });
  }
  render() {
    const { _addData } = this.props;
    console.log(_addData, "data in app");
    return (
      <div>
        <h1>HEllo</h1>
      </div>
    );
  }
}

const mapState = ({ addData }) => {
  return {
    _addData: addData
  };
};
const mapDispatch = dispatchEvent => ({
  $addData: values => dispatchEvent(addData(values))
});
export default connect(mapState, mapDispatch)(App);
