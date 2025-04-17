import { scheduleDay } from '../index'

const selectedDate = document.querySelector('#date')

selectedDate.oninput = () => scheduleDay()
