import React from "react";
import Placehoder from "../../../../assets/images/placeholder.svg"

export default function ActiveTile() {
  return (
    <>
      <div className="tile tile-active">
        <img src={Placehoder} alt=""/>
        <h3>workshop title</h3>
        <div className="button-group buttons-active">
          <button className="button-primary">Delete Workshop</button>
          <button className="button-primary">Update Workshop</button>
        </div>
      </div>
    </>
  );
}
