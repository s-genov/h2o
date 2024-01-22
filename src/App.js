import logo from "./images/logo-groot-PNG.png";
import './App.css';
import SliderPipeProblems from './components/Slider/SliderPipeProblems/SliderPipeProblems';
import SliderPipeLength from "./components/Slider/SliderPipeLenght/SliderPipeLength";
import {useEffect, useRef, useState} from "react";
import VideoPlayer from "./components/VideoPlayer";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import CaseTable from "./components/Table/CaseTable";
import Footer from "./components/Footer/Footer";
import SonarPipe from "./components/SonarPipe/SonarPipe";

const videoUrls = {
  leftVideo: {
    src: 'videos/2023-10-05_13-53-19_H2O_trimmed.mp4',
    type: 'video/mp4',
  },
  rightVideo: {
    src: 'videos/20231005_135339 vanaf BCD 50mtr richting BCE onderzijde_exported_trimmed.mp4',
    type: 'video/mp4', 
  }
}

const pipeSegments = [
  {
    marks: [
      {
        value: 0.03,
        label: '',
      },
      {
        value: 0.15,
        label: '',
      },
    ]
  },
]

// Temporarily not in use

// const convertToLengthInSeconds = (timeMark) => {

//   let minutes = 0
//   let seconds = 0
//   let convertedTimeMark = timeMark.toString()

//   // if it's a floating point number
//   if(convertedTimeMark.includes('.')){
//     let parts = convertedTimeMark.split('.')
//      minutes = parseInt(parts[0])
//      seconds = parseInt(parts[1])
//   } else {
//     minutes = parseInt(timeMark)
//   }

//   if(seconds > 60){
//     seconds = 59
//   }

//   if(minutes === 0){
//     return seconds;
//   }

//   return (minutes * 60) + seconds
// }

// const convertToLengthInMinutes = (secondsAmount) => {
//   let mind = secondsAmount % (60 * 60);
//   let minutes = Math.floor(mind / 60);
//   let secd = mind % 60;
//   let seconds = Math.ceil(secd);
//   return parseFloat(`${minutes}.${seconds}`);
// }

function App() {

  const totalSegmentsLength = pipeSegments.length
  const [currentSegment, setCurrentSegment] = useState(pipeSegments[0])
  const [playerTime, setPlayerTime] = useState(null)
  const [playerAutoPlay, setPlayerAutoPlay] = useState(false)
  const [currentTimeMarks, setCurrentTimeMarks] = useState([])
  const [problemsSliderValue, setProblemsSliderValue] = useState(0)
  const [videoDuration, setVideoDuration] = useState(0.20)

  useEffect(() => {
    changeSegmentTo(0)
  }, []);

  const changeSegmentTo = (segmentIndex) => {
    setPlayerTime(null)
    setPlayerAutoPlay(false)
    setCurrentSegment(pipeSegments[segmentIndex])

    let timeMarks = pipeSegments[segmentIndex].marks.map( (mark) => {
      return mark.value
    })
    setCurrentTimeMarks(timeMarks)
    setProblemsSliderValue(0)
  }

  const pipeLengthSliderChangeHandler = (sliderValue) => {
    changeSegmentTo(sliderValue-1)
  }

  const pipeProblemsSliderChangeHandler = (sliderValue) => {
    setProblemsSliderValue(sliderValue)
    setPlayerTime(sliderValue * 100)

    if(currentTimeMarks.includes(sliderValue)){
      //  alert('Issue found. Videos start playing.')
        setPlayerAutoPlay(true)
    } else {
        setPlayerAutoPlay(false)
    }
  }

  const playerSeekHandler = (seekValueInSeconds) => {
      const newSliderValue = seekValueInSeconds / 100
      setPlayerTime(seekValueInSeconds)
      setProblemsSliderValue(Number(newSliderValue.toFixed(2)))
  }

  return (
      <div className="App">
        <section className="sliders">
          <div className="container">
            <div className="slider-top">
              <div className="logo-box">
                <div className="company-logo">
                  <img src={logo} alt=""></img>
                  <div className="logo-text">
                    <span className="text">Your Eyes Under Water</span>
                  </div>
                </div>
              </div>
              <SliderPipeLength totalLength={totalSegmentsLength} pipeLengthSliderChangeHandler={pipeLengthSliderChangeHandler} />
            </div>
            <SliderPipeProblems
                value={problemsSliderValue}
                videoDuration={videoDuration}
                currentTimeMarks={currentSegment.marks}
                pipeProblemsSliderChangeHandler={pipeProblemsSliderChangeHandler}/>
          </div>
        </section>
        <section>
          <div className="container">
            <SonarPipe />
          </div>
        </section>
        <section>
          <div className="container video-container">
            <div className="video-row">
              <div className="video-block">
                <VideoPlayer
                    playerTime={playerTime}
                    setPlayerAutoPlay={setPlayerAutoPlay}
                    playerSeekHandler={playerSeekHandler}
                    autoPlay={playerAutoPlay}
                    url={videoUrls.leftVideo.src}
                    type={videoUrls.leftVideo.type}
                    />
              </div>
              <div className="video-block">
                <VideoPlayer
                    playerTime={playerTime}
                    setPlayerAutoPlay={setPlayerAutoPlay}
                    playerSeekHandler={playerSeekHandler}
                    autoPlay={playerAutoPlay}
                    url={videoUrls.rightVideo.src}
                    type={videoUrls.rightVideo.type}/>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
          <ImageGallery />
          </div>
        </section>
        <section className="container">
          <CaseTable />
        </section>
        <div className="container">
          <Footer />
        </div>
      </div>
);
}


export default App;
