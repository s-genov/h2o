import logo from "./images/logo-groot-PNG.png";
import './App.css';
import SliderPipeProblems from './components/Slider/SliderPipeProblems/SliderPipeProblems';
import SliderPipeLength from "./components/Slider/SliderPipeLenght/SliderPipeLength";
import {useEffect, useRef, useState} from "react";
import VideoPlayer from "./components/VideoPlayer";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const videoUrls = {
  leftVideo: 'videos/video-one.mp4',
  rightVideo: 'videos/video-two.mov'
}

const pipeSegments = [
  {
    marks: [
      {
        value: 3.00,
        label: '',
      },
      {
        value: 4.25,
        label: '',
      },
      {
        value: 5.37,
        label: '',
      },
      {
        value: 7.01,
        label: '',
      },
    ]
  },
  {
    marks: [
      {
        value: 2.54,
        label: '',
      },
      {
        value: 6.58,
        label: '',
      },
    ]
  },
  {
    marks: [
      {
        value: 4.57,
        label: '',
      },
      {
        value: 1.11,
        label: '',
      },
    ]
  },
  {
    marks: [
      {
        value: 2.54,
        label: '',
      },
      {
        value: 3.33,
        label: '',
      },
      {
        value: 7.01,
        label: '',
      },
    ]
  },
  {
    marks: [
      {
        value: 2.45,
        label: '',
      },
      {
        value: 4.44,
        label: '',
      },
      {
        value: 5.51,
        label: '',
      },
    ]
  }
]

const convertToLengthInSeconds = (timeMark) => {

  let minutes = 0
  let seconds = 0
  let convertedTimeMark = timeMark.toString()

  // if it's a floating point number
  if(convertedTimeMark.includes('.')){
    let parts = convertedTimeMark.split('.')
     minutes = parseInt(parts[0])
     seconds = parseInt(parts[1])
  } else {
    minutes = parseInt(timeMark)
  }

  if(seconds > 60){
    seconds = 59
  }

  if(minutes === 0){
    return seconds;
  }

  return (minutes * 60) + seconds
}

const convertToLengthInMinutes = (secondsAmount) => {
  let mind = secondsAmount % (60 * 60);
  let minutes = Math.floor(mind / 60);
  let secd = mind % 60;
  let seconds = Math.ceil(secd);
  return parseFloat(`${minutes}.${seconds}`);
}

function App() {

  const totalSegmentsLength = pipeSegments.length
  const [currentSegment, setCurrentSegment] = useState(pipeSegments[0])
  const [playerTime, setPlayerTime] = useState(null)
  const [playerAutoPlay, setPlayerAutoPlay] = useState(false)
  const [currentTimeMarks, setCurrentTimeMarks] = useState([])
  const [problemsSliderValue, setProblemsSliderValue] = useState(0)
  const [videoDuration, setVideoDuration] = useState( 7.50)

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
    setPlayerTime(convertToLengthInSeconds(sliderValue))
    if(currentTimeMarks.includes(sliderValue)){
       alert('Issue found. Videos start playing.')
        setPlayerAutoPlay(true)
    } else {
        setPlayerAutoPlay(false)
    }
  }

  const playerSeekHandler = (seekValueInSeconds) => {
      setProblemsSliderValue(convertToLengthInMinutes(seekValueInSeconds))
      setPlayerTime(seekValueInSeconds)
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
          <div className="container video-container">
            <div className="video-row">
              <div className="video-block">
                <VideoPlayer
                    playerTime={playerTime}
                    playerSeekHandler={playerSeekHandler}
                    autoPlay={playerAutoPlay}
                    url={videoUrls.leftVideo}
                    />
              </div>
              <div className="video-block">
                <VideoPlayer
                    playerTime={playerTime}
                    playerSeekHandler={playerSeekHandler}
                    autoPlay={playerAutoPlay}
                    url={videoUrls.leftVideo}/>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
          <ImageGallery />
          </div>
        </section>
      </div>
);
}


export default App;
