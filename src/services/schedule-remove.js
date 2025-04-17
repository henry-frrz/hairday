import { apiConfig } from './api-config'

export const scheduleRemove = async ({ id }) => {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    alert('Não foi possível remover o agendamento. Tente novamente mais tarde.')
  }
}
