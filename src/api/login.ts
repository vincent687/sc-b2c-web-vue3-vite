import axios from 'axios'

const getUser = () => {
  return Promise.resolve(axios.get('/api/user/getUserInfo'))
}

export { getUser }
