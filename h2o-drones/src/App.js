import logo from "./images/logo-groot-PNG.png";
import './App.css';
import SliderPipeProblems from './components/Slider/SliderPipeProblems/SliderPipeProblems';
import SliderPipeDepth from "./components/Slider/SliderPipeDepth/SliderPipeDepth";

function App() {
  return (
      <div className="App">
        <section className="sliders">
          <div className="container">
            <div className="slider-top">
              <div class="logo-box">
                <div className="company-logo">
                  <img src={logo} alt=""></img>
                  <div class="logo-text">
                    <span class="text">Your Eyes Under Water</span>
                  </div>
                </div>
              </div>
              <SliderPipeDepth />
            </div>
            <SliderPipeProblems />
          </div>
        </section>
      </div>
  );
}

export default App;
