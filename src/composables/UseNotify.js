import { useQuasar } from 'quasar'
export default function useNotify () {
  const $q = useQuasar()

  const notifySuccess = (message) => {
    $q.notify({
      type: 'positive',
      message: message || 'Tudo ok!'
    })
  }
  const notifyError = (message) => {
    $q.notify({
      type: 'negative',
      message: message || 'Houve uma falha!'
    })
  }
  return {
    notifySuccess,
    notifyError
  }
}
