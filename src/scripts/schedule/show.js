import dayjs from 'dayjs'

const periodMorning = document.querySelector('#period-morning')
const periodAfternoon = document.querySelector('#period-afternoon')
const periodNight = document.querySelector('#period-night')

export const scheduleShow = dailySchedules => {
  periodMorning.textContent = ''
  periodAfternoon.textContent = ''
  periodNight.textContent = ''

  dailySchedules.forEach(schedule => {
    const item = document.createElement('li')
    const hour = dayjs(schedule.when).hour()

    item.id = schedule.id

    item.innerHTML = `
      <strong>${dayjs(schedule.when).format('HH:mm')}</strong>
      <span>${schedule.name}</span>
      <img
        src="./src/assets/cancel.svg"
        alt="Cancelar"
        class="cancel-icon"
      />
    `
    if (hour < 12) return periodMorning.append(item)
    if (hour < 18) return periodAfternoon.append(item)
    if (hour < 21) return periodNight.append(item)
  })
}
