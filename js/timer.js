export default function Timer ({
  minutesDisplay,
  secondsDisplay,
  timerTimeout,
  minutes
}) {

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function countdown() {
    timerTimeout = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
  
      updateTimerDisplay(minutes, 0)
  
      if(isFinished) {
        timeEnd()
        return
      }
  
      if(seconds <= 0) {
        seconds = 59
        --minutes
      }
  
      updateTimerDisplay(minutes, String(seconds - 1))
  
      countdown()
    }, 1000)
  }

  function pause() {
    clearTimeout(timerTimeout)
  }

  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeout)
  }

  return {
    countdown,
    setTimeout,
    resetTimer,
    pause,
  }
}