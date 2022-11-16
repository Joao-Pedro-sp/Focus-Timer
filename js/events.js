export default function Events({
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
}) {
  
  buttonLight.addEventListener('click', () => {
    controls.DarkMode()
    sound.pressButton()
  })
  
  buttonDark.addEventListener('click', () => {
    controls.LightMode()
    pressButton()
  })
  
  buttonPlay.addEventListener('click', () => {
    time.countdown()
    controls.play()
    sound.pressButton()
  })
  
  buttonPause.addEventListener('click', () => {
    time.pause()
    controls.pauseControl()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', () => {
    time.resetTimer()
    sound.pressButton()
  })
  
  buttonMore.addEventListener('click', () => {
    controls.moreFiveMinutes()
    sound.pressButton()
  })
  
  buttonLess.addEventListener('click', () => {
    controls.lessFiveMinutes()
    sound.pressButton()
  })
  
  buttonForest.addEventListener('click', () => {
    cardForest.classList.toggle('active')
    sound.audioForest()
    sound.resetForestVolume()
    sound.pressButton()
  })
  
  buttonRain.addEventListener('click', () => {
    cardRain.classList.toggle('active')
    sound.audioRain()
    sound.resetRainVolume()
    sound.pressButton()
  })
  
  buttonCoffee.addEventListener('click', () => {
    cardCoffee.classList.toggle('active')
    sound.audioCoffee()
    sound.resetCoffeeVolume()
    sound.pressButton()
  })
  
  buttonFire.addEventListener('click', () => {
    cardFire.classList.toggle('active')
    sound.audioFire()
    sound.resetFireVolume()
    sound.pressButton()
  })
}