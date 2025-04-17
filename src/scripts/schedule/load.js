import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day'
import { hoursLoad, scheduleShow } from '../index'

const selectedDate = document.querySelector('#date')

export const scheduleDay = async () => {
  const date = selectedDate.value

  const dailySchedules = await scheduleFetchByDay({ date })

  scheduleShow(dailySchedules)

  hoursLoad({ date, dailySchedules })
}
