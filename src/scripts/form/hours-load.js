import dayjs from 'dayjs'

import { openingHours } from '../../utils/opening-hours'
import { hoursClick } from '../index'

const hours = document.querySelector('#hours')

export const hoursLoad = ({ date, dailySchedules }) => {
  hours.textContent = ''

  const unavailableHours = dailySchedules.map(schedule => {
    return dayjs(schedule.when).format('HH:mm')
  })

  const opening = openingHours.map(hour => {
    const [scheduleHour] = hour.split(':')

    const isHourPast = dayjs(date).add(scheduleHour, 'hour').isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available,
    }
  })

  const hasPeriods = []

  opening.forEach(({ hour, available }) => {
    const hourItem = document.createElement('li')

    hourItem.classList.add('hour')
    hourItem.classList.add(available ? 'hour-available' : 'hour-unavailable')

    hourItem.textContent = hour

    const [periodHour] = hour.split(':')

    if (!hasPeriods.includes('Manhã') && periodHour >= 6 && periodHour <= 12) {
      addPeriodHeader('Manhã')
      hasPeriods.push('Manhã')
    }

    if (!hasPeriods.includes('Tarde') && periodHour >= 12 && periodHour <= 18) {
      addPeriodHeader('Tarde')
      hasPeriods.push('Tarde')
    }

    if (!hasPeriods.includes('Noite') && periodHour >= 18) {
      addPeriodHeader('Noite')
      hasPeriods.push('Noite')
    }

    hours.append(hourItem)
  })

  hoursClick()
}

const addPeriodHeader = period => {
  const periodHeader = document.createElement('span')

  periodHeader.classList.add('hour-period')

  periodHeader.textContent = period

  hours.append(periodHeader)
}
