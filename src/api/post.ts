import axios from 'axios'

const getPosts = (params: any) => {
  debugger
  return axios.get('/api/posts')
}

const getPostDetail = (id: number) => {
  debugger
  //return axios.get('/api/post')
  return axios.get('/api/post', { params: { id: id } })
}
export { getPosts, getPostDetail }
