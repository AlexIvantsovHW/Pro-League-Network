import React from "react";
import s from "../Body/style.module.css";
import Sub_container_2 from "./Sub_container_2";
import Sub_container_3 from './Sub_container_3';
import Sub_container_1 from "./Sub_container_1";
import Sub_container_4 from "./Sub_container_4";
import Sub_container_5 from "./Sub_container_5 ";


class BodyContainer extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <Sub_container_1/>
        <Sub_container_2/>
        <Sub_container_3/>
       <Sub_container_4/>
       <Sub_container_5/>
      </div>
    );
  }
}

export default BodyContainer;
