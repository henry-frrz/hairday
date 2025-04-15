import scheduleDay from './schedule/load'

const selectedDate = document.querySelector('#date')

selectedDate.oninput = () => scheduleDay()
