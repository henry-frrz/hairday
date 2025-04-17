import scheduleFetchByDay from '../../../../services/schedule-fetch-by-day'
import hoursLoad from '../hours-load'
import scheduleShow from './show'

const selectedDate = document.querySelector('#date')

const scheduleDay = async () => {
  const date = selectedDate.value

  const dailySchedules = await scheduleFetchByDay({ date })

  scheduleShow(dailySchedules)

  hoursLoad(date)
}

export default scheduleDay
