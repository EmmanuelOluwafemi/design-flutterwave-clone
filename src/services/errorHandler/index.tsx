import api from 'services/config'

const ErrorHandler = () => {
    api.interceptors.request.use(undefined, (error) => {
        alert(error.response.data.message || error.response.message)
    })
  return (
    <></>
  )
}

export default ErrorHandler