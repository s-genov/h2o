import "./slider-pipe-length.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {useState} from "react";

const SliderPipeLength = (props) => {

  const [currentLength, setCurrentLength] = useState(1)

  const handleLengthChange = (newLengthValue) => {
      setCurrentLength(newLengthValue)
      props.pipeLengthSliderChangeHandler(newLengthValue)
  }

  const getValueLabelFormat = (value) => {
      return `${value}0`;
  }

  return (
    <Box sx={{ width: 500 }}>
      <div className="slider-top__labels">
        <div className="position-indicators">
          <span className="current">{currentLength + '0'} m </span>/<span className="total"> {props.totalLength + '0'} m</span>
        </div>
        <span className="slider-title">PIPE LENGTH</span>
      </div>
      <Slider
        size="medium"
        defaultValue={1}
        step={1}
        min={1}
        max={props.totalLength}
        valueLabelFormat={getValueLabelFormat}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={ (event, value) => {
            handleLengthChange(value)
        }}
      />
    </Box>
  );
};

export default SliderPipeLength;
