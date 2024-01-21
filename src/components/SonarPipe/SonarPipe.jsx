import React from "react";
import SonarPipeImage from "../../images/624 heenweg bovenzijde-horizontal.png"

const SonarPipe = () => {
  return (
    <div style={{ height: 300, width: "100%", backgroundColor: "grey", display: 'flex', justifyContent: "center", paddingBottom: 20 }}>
      <img src={SonarPipeImage} alt="" style={{ width: "100%", aspectRatio: "1/1"}}></img>
    </div>
  )
}

export default SonarPipe;