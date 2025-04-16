import dayjs from 'dayjs'

import openingHours from '../../../utils/opening-hours'
import hoursClick from './hours-click'

const hours = document.querySelector('#hours')

const hoursLoad = date => {
  hours.textContent = ''

  const opening = openingHours.map(hour => {
    const [scheduleHour] = hour.split(':')

    const isHourPast = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs())

    return {
      hour,
      available: isHourPast,
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

export default hoursLoad
