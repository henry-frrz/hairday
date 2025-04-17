import dayjs from 'dayjs'

import { scheduleNew } from '../../services/schedule-new'
import { scheduleDay } from '../index'

const form = document.querySelector('form')
const clientName = document.querySelector('#client')
const date = document.querySelector('#date')

const inputToday = dayjs().format('YYYY-MM-DD')

date.value = inputToday
date.min = inputToday
date.max = dayjs().add(1, 'month').format('YYYY-MM-DD')

form.onsubmit = async event => {
  event.preventDefault()

  try {
    const name = clientName.value.trim()

    if (!name) {
      return alert('Informe o nome do cliente!')
    }

    const hourSelected = document.querySelector('.hour-selected')

    if (!hourSelected) {
      return alert('Selecione um horário')
    }

    const [hour] = hourSelected.innerText.split(':')

    const when = dayjs(date.value).add(hour, 'hour')

    await scheduleNew({ id: new Date().getTime(), name, when })

    await scheduleDay()

    clientName.value = ''
  } catch (error) {
    alert('Não foi possível realizar o agendamento.')
  }
}
