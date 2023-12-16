import "./slider-pipe-problems.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import pipeStart from "../../../images/pipe-start.png";
import pipeMiddle from "../../../images/pipe-middle.png";
import pipeEnd from "../../../images/pipe-end.png";

const SliderPipeProblems = () => {
  const marks = [
    {
      value: 15,
    },
    {
      value: 25,
    },
    {
      value: 55,
    },
    {
      value: 75,
    },
  ];

  return (
    <div className="problem-slider">
      <div class="pipe-background">
        <div class="pipe-img pipe-img-1">
          <img src={pipeStart} alt=""></img>
        </div>
        <div class="pipe-img pipe-img-2">
          <img src={pipeMiddle} alt=""></img>
        </div>
        <div class="pipe-img pipe-img-3">
          <img src={pipeEnd} alt=""></img>
        </div>
      </div>
      {marks.map((mark) => {
        return (
          <div
            class="mark-triangle"
            style={{
              position: "absolute",
              height: 0,
              width: 0,
              top: "-10px",
              left: `calc(${mark.value}% - 14px)`,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderTop: '15px solid #27AAE1',
              zIndex: 2,
            }}
          >
          </div>
        );
      })}
      <Box sx={{ width: "100%" }}>
        <Slider
          size="medium"
          defaultValue={50}
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
        />
      </Box>
    </div>
  );
};

export default SliderPipeProblems;
