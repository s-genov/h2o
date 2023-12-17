import "./slider-pipe-problems.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import pipeStart from "../../../images/pipe-start.png";
import pipeMiddle from "../../../images/pipe-middle.png";
import pipeEnd from "../../../images/pipe-end.png";
import {useEffect, useState} from "react";

const SliderPipeProblems = (props) => {


   const [marks, setMarks] = useState([])
   const [videoLength, setVideoLength] = useState(0)
   const [defaultValue, setDefaultValue] = useState(0)

    useEffect(() => {
        setDefaultValue(defaultValue)
    }, [props.defaultValue]);

    useEffect(() => {
        setVideoLength(props.videoDuration)
    }, [props.videoDuration]);


    useEffect(() => {
        setMarks(props.currentTimeMarks)
    }, [props.currentTimeMarks]);


  const handleChange = (value) => {
      props.pipeProblemsSliderChangeHandler(value)
  }

  return (
    <div className="problem-slider">
      <div className="pipe-background">
        <div className="pipe-img pipe-img-1">
          <img src={pipeStart} alt=""></img>
        </div>
        <div className="pipe-img pipe-img-2">
          <img src={pipeMiddle} alt=""></img>
        </div>
        <div className="pipe-img pipe-img-3">
          <img src={pipeEnd} alt=""></img>
        </div>
      </div>
      <Box sx={{ width: "100%" }}>
        <Slider
          size="medium"
          min={0}
          max={videoLength}
          value={props.value}
          defaultValue={0}
          step={0.01}
          aria-label="Default"
          valueLabelDisplay="auto"
          marks={marks}
          sx={{
            paddingBottom: 0,
            color: "transparent",
            "& .MuiSlider-mark": {
              height: "71px",
              bgcolor: "#1976d2",
              position: "absolute",
              width: "2px",
              top: "-57px",
            },
            "& .MuiSlider-markActive": {
              height: "71px",
              bgcolor: "#1976d2",
            },
            "& .MuiSlider-thumb": {
              color: "#1976d2",
            },
          }}
          slots={{
            mark: "div",
          }}
          onChange={ (event, value) => {
              handleChange(value)
          }}
        />
      </Box>
    </div>
  );
};

export default SliderPipeProblems;
