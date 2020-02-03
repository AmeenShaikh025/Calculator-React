import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Keycomponent from "./components/Keycomponent";
import Actioncomponent from "./components/Actioncomponent";
import EqualComponent from "./components/EqualComponent";
import Clearcomponent from "./components/Clearcomponent";
import Backcomponent from "./components/Backcomponent";

import {
  keyAdd,
  keyAction,
  clearKey,
  backKey
} from "./reducers/operationReducer";

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
  backKey = () => {
    this.props.backKey();
  };
  enterKey = e => {
    //To check for numbers
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.which >= 48 && e.which <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      (e.which >= 96 && e.which <= 105) ||
      // minus
      e.key === "-" ||
      //period
      e.keyCode === 190 ||
      e.which === 190 ||
      //add
      e.key === "+" ||
      //multiply
      e.keyCode === 56 ||
      e.which === 56 ||
      //divide
      e.key === "/"
    ) {
      this.props.keyAdd(e.key);
    }
    if (e.key === "=" || e.keyCode === 13) {
      this.props.keyAction();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.enterKey, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.enterKey, false);
  }
  render() {
    return (
      <div className="App" onKeyDown={this.enterKey}>
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
          <Backcomponent operand="operand" backKey={this.backKey}>
            BACK
          </Backcomponent>
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
      clearKey,
      backKey
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
