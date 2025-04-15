import dayjs from 'dayjs'

const form = document.querySelector('form')
const date = document.querySelector('#date')

const inputToday = dayjs().format('YYYY-MM-DD')

date.value = inputToday
date.min = inputToday
date.max = dayjs().add(1, 'month').format('YYYY-MM-DD')

form.onsubmit = event => {
  event.preventDefault()

  console.log('Enviado')
}
