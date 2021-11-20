import axios from 'axios'

const getUser = (params: any) => {
  return Promise.resolve(axios.get('/api/user/getUserInfo'))
}

export { getUser }
