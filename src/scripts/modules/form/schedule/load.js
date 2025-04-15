import hoursLoad from '../hours-load'

const selectedDate = document.querySelector('#date')

const scheduleDay = () => {
  const date = selectedDate.value

  hoursLoad(date)
}

export default scheduleDay
