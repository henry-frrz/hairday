import { scheduleRemove } from '../../services/schedule-remove'
import { scheduleDay } from './load'

const periods = document.querySelectorAll('.period')

periods.forEach(period => {
  period.onclick = async event => {
    if (event.target.classList.contains('cancel-icon')) {
      const item = event.target.closest('li')
      const { id } = item.dataset

      if (id) {
        const isConfirm = confirm(
          'Tem certeza que deseja cancelar esse agendamento?'
        )

        if (isConfirm) {
          await scheduleRemove({ id })
          await scheduleDay()
        }
      }
    }
  }
})
