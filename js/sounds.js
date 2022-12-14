export default function Sounds({
  cardForest,
  cardRain,
  cardCoffee,
  cardFire,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeVolume,
  inputFireVolume
}) {

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudioForest = new Audio("https://github.com/JoaoPdev00/Focus-Timer/blob/main/audio/Floresta.wav")
  const bgAudioRain = new Audio("https://github.com/JoaoPdev00/Focus-Timer/blob/main/audio/Chuva.wav")
  const bgAudioCoffeeShop = new Audio("https://github.com/JoaoPdev00/Focus-Timer/blob/main/audio/Cafeteria.wav")
  const bgAudioFireplace = new Audio("https://github.com/JoaoPdev00/Focus-Timer/blob/main/audio/Lareira.wav")

  bgAudioForest.loop = true
  bgAudioRain.loop = true
  bgAudioCoffeeShop.loop = true
  bgAudioFireplace.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }
  
  function timeEnd() {
    kitchenTimer.play
  }
  
  function audioForest() {
    cardForest.classList.contains('active')
    ? bgAudioForest.play()
    : bgAudioForest.pause()
  }
  
  function audioRain() {
    cardRain.classList.contains('active')
    ? bgAudioRain.play()
    : bgAudioRain.pause()
  }
  
  function audioCoffee() {
    cardCoffee.classList.contains('active')
    ? bgAudioCoffeeShop.play()
    : bgAudioCoffeeShop.pause()
  }
  
  function audioFire() {
    cardFire.classList.contains('active')
    ? bgAudioFireplace.play()
    : bgAudioFireplace.pause()
  }
  
  function setAudioVolume() {
    bgAudioForest.volume = inputForestVolume.value
    bgAudioRain.volume = inputRainVolume.value
    bgAudioCoffeeShop.volume = inputCoffeeVolume.value
    bgAudioFireplace.volume = inputFireVolume.value
  }
  
  function resetForestVolume() {
    inputForestVolume.value = 0.5
  }
  
  function resetRainVolume() {
    inputRainVolume.value = 0.5
  }
  
  function resetCoffeeVolume() {
    inputCoffeeVolume.value = 0.5
  }
  
  function resetFireVolume() {
    inputFireVolume.value = 0.5
  }

  inputForestVolume.addEventListener('input', setAudioVolume)

  inputRainVolume.addEventListener('input', setAudioVolume)

  inputCoffeeVolume.addEventListener('input', setAudioVolume)

  inputFireVolume.addEventListener('input', setAudioVolume)

  return {
    pressButton,
    timeEnd,
    audioForest,
    audioRain,
    audioCoffee,
    audioFire,
    resetForestVolume,
    resetRainVolume,
    resetCoffeeVolume,
    resetFireVolume
  }
}