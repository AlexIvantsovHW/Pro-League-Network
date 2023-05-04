import "./App.css";
import React from "react";
import Style from './Component/Style.module.css'

import { connect } from "react-redux";
import HeaderContainer from "./Component/Header/HeaderContainer";
import BodyContainer from "./Component/Body/BodyContainer";
import BottomContainer from "./Component/Bottom/BottomContainer";




class App extends React.Component {

  render() {

    return (
      <div >
        <HeaderContainer/>
        <BodyContainer/>
        <BottomContainer/>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(App);