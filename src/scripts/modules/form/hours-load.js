import dayjs from 'dayjs'

import openingHours from '../../../utils/opening-hours'

const hours = document.querySelector('#hours')

const hoursLoad = date => {
  const opening = openingHours.map(hour => {
    const [scheduleHour] = hour.split(':')

    const isHourPast = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs())

    return {
      hour,
      available: isHourPast,
    }
  })

  opening.forEach(({ hour, available }) => {
    const hourItem = document.createElement('li')

    hourItem.classList.add('hour')
    hourItem.classList.add(available ? 'hour-available' : 'hour-unavailable')

    hourItem.textContent = hour
    hours.append(hourItem)
  })
}

export default hoursLoad
