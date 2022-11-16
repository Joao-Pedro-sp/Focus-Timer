import Timer from "./timer.js"
import Controls from "./controls.js"
import Events from "./events.js"
import Sounds from "./sounds.js"
import {
  buttonLight,
  buttonDark,
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFire,
  cardForest,
  cardRain,
  cardCoffee,
  cardFire,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeVolume,
  inputFireVolume,
  minutes,
  timerTimeout
} from "./elements.js"

const time = Timer ({minutesDisplay, secondsDisplay, timerTimeout, minutes})

const controls = Controls ({buttonDark, buttonLight, buttonPlay, buttonPause,
minutesDisplay})

const sound = Sounds ({
  cardForest,
  cardRain,
  cardCoffee,
  cardFire,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeVolume,
  inputFireVolume
})

const events = Events ({
  buttonLight,
  buttonDark,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFire,
  controls,
  time,
  cardForest,
  cardRain,
  cardCoffee,
  cardFire,
  sound
})









