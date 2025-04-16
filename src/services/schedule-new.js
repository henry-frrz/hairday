import apiConfig from './api-config'

const scheduleNew = async ({ id, name, when }) => {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, when }),
    })
  } catch (error) {
    alert('Não foi possível agendar. Tente novamente mais tarde.')
  }
}

export default scheduleNew
