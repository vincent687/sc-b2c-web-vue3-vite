import axios from 'axios'

const getPosts = (params: any) => {
  return axios.get('/api/posts')
}

const getPostDetail = (id: number) => {
  //return axios.get('/api/post')
  return axios.get('/api/post', { params: { id: id } })
}
export { getPosts, getPostDetail }
