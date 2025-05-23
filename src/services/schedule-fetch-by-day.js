import dayjs from 'dayjs'
import {apiConfig} from './api-config'

export const scheduleFetchByDay = async ({ date }) => {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json()

    const dailySchedules = data.filter(schedule => {
      return dayjs(date).isSame(schedule.when, 'day')
    })

    return dailySchedules
  } catch (error) {}
}
