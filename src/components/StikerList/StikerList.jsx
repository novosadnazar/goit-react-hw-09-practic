import React, { Component } from "react";
import stikers from "../../stikers.json";
import style from "./StikerList.module.css";
import Stiker from "../Stiker/Stiker";

export class StikerList extends Component {
  render() {
    const { onSelected } = this.props;
    return (
      <div className={style.box}>
        {stikers.map(({ img, label }, index) => {
          return (
            <Stiker
              key={index}
              img={img}
              label={label}
              onSelected={onSelected}
            />
          );
        })}
      </div>
    );
  }
}
//