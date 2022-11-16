const buttonLight = document.querySelector('.light')
const buttonDark = document.querySelector('.dark')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffeeShop')
const buttonFire = document.querySelector('.fireplace')
const cardForest = document.querySelector('.cardForest')
const cardRain = document.querySelector('.cardRain')
const cardCoffee = document.querySelector('.cardCoffee')
const cardFire = document.querySelector('.cardFire')
const inputForestVolume = document.querySelector('#forest-volume')
const inputRainVolume = document.querySelector('#rain-volume')
const inputCoffeeVolume = document.querySelector('#coffee-volume')
const inputFireVolume = document.querySelector('#fire-volume')
let minutes = Number(minutesDisplay.textContent)
let timerTimeout

export {
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
}