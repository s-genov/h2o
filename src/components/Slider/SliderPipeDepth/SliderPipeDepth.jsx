import "./slider-pipe-depth.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const SliderPipeDepth = () => {
  return (
    <Box sx={{ width: 500 }}>
      <div className="slider-top__labels">
        <div className="position-indicators">
          <span class="current">40 m </span>/<span class="total"> 100 m</span>
        </div>
        <span class="slider-title">PIPE LENGTH</span>
      </div>
      <Slider
        size="medium"
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default SliderPipeDepth;
