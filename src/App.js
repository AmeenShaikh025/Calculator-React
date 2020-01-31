import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Keycomponent from "./components/Keycomponent";
import Actioncomponent from "./components/Actioncomponent";
import EqualComponent from "./components/EqualComponent";
import Clearcomponent from "./components/Clearcomponent";

import { keyAdd, keyAction, clearKey } from "./reducers/operationReducer";

class App extends Component {
  //console.log(props.store);
  addKey = data => {
    //console.log(data);
    this.props.keyAdd(data);
  };
  resultKey = () => {
    this.props.keyAction();
  };
  clearResult = () => {
    this.props.clearKey();
  };
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps.store);
  //   if (!nextProps.store) {
  //     return false;
  //   }
  //   return true;
  // }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="output">{this.props.store}</div>
        </div>
        <div className="row">
          <Keycomponent addKey={this.addKey}>7</Keycomponent>
          <Keycomponent addKey={this.addKey}>8</Keycomponent>
          <Keycomponent addKey={this.addKey}>9</Keycomponent>
          <Actioncomponent operand="operand" addKey={this.addKey}>
            /
          </Actioncomponent>
        </div>
        <div className="row">
          <Keycomponent addKey={this.addKey}>4</Keycomponent>
          <Keycomponent addKey={this.addKey}>5</Keycomponent>
          <Keycomponent addKey={this.addKey}>6</Keycomponent>
          <Actioncomponent operand="operand" addKey={this.addKey}>
            *
          </Actioncomponent>
        </div>
        <div className="row">
          <Keycomponent addKey={this.addKey}>1</Keycomponent>
          <Keycomponent addKey={this.addKey}>2</Keycomponent>
          <Keycomponent addKey={this.addKey}>3</Keycomponent>
          <Actioncomponent operand="operand" addKey={this.addKey}>
            -
          </Actioncomponent>
        </div>
        <div className="row">
          <Keycomponent addKey={this.addKey}>0</Keycomponent>
          <Actioncomponent operand="operand" addKey={this.addKey}>
            .
          </Actioncomponent>
          <Actioncomponent operand="operand" addKey={this.addKey}>
            %
          </Actioncomponent>
          <Actioncomponent operand="operand" addKey={this.addKey}>
            +
          </Actioncomponent>
        </div>
        <div className="row">
          <Clearcomponent operand="operand" clearResult={this.clearResult}>
            C
          </Clearcomponent>
          <EqualComponent operand="operand" resultKey={this.resultKey}>
            =
          </EqualComponent>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    store: store.operation.exp
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      keyAdd,
      keyAction,
      clearKey
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
