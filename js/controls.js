export default function Controls ({
  buttonDark,
  buttonLight,
  buttonPlay,
  buttonPause,
  minutesDisplay
}) {
  
  function DarkMode() {
    document.body.classList.toggle('dark')
    buttonDark.classList.remove('hide')
    buttonLight.classList.add('hide')
  }
  
  function LightMode() {
    document.body.classList.toggle('dark')
    buttonDark.classList.add('hide')
    buttonLight.classList.remove('hide')
  }
  
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }
  
  function pauseControl() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }
  
  function moreFiveMinutes() {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
  }
  
  function lessFiveMinutes() {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
  }

  return {
    DarkMode,
    LightMode,
    play,
    pauseControl,
    moreFiveMinutes,
    lessFiveMinutes
  }
}