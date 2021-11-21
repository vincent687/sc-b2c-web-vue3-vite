import { MockMethod } from 'vite-plugin-mock'

const userInfo = {
  name: 'vincent',
  email: 'vincentwong687@gmail.com',
  title: 'programmer',
  country: '香港',
  address: '123'
}

const postInfo = [
  {
    id: 1,
    title: '中六暑期實習生計畫2019',
    time: '21 Nov',
    participantCount: '1',
    participantTotal: '',
    places: ['全港'],
    tumbnail: 'https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg',
    tags: [
      {
        id: 1,
        name: 'No Poverty',
        color: 'red'
      },
      {
        id: 2,
        name: 'Quality Education',
        color: 'red'
      },
      {
        id: 3,
        name: 'Decent Work',
        color: 'red'
      },
      {
        id: 4,
        name: '導師/教師',
        color: 'grey'
      },
      {
        id: 5,
        name: '管理工作',
        color: 'grey'
      }
    ]
  },
  {
    id: 2,
    title: '競技同樂日-手語傳譯義工',
    time: '21 Nov',
    participantCount: '1',
    participantTotal: '4',
    places: ['屯門'],
    tumbnail: 'https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg',
    tags: [
      {
        id: 1,
        name: '另類專業協助',
        color: 'grey'
      }
    ]
  }
]

const postDetail = {
  id: 1,
  title: '競技同樂日-手語傳譯義工',
  image: 'https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg',
  description:
    '依據會計準則和公司會計制度規定，編制公司合併報表和內部管理報表，按要求向股東單位、外部機構報送、披露相關財務資訊，為管理決策提供財務分析資料。審核、監督、指導下屬公司的報表編制工作，及時處理報表編制中出現的問題；',
  tags: [
    {
      id: 1,
      name: 'No Poverty',
      color: 'red'
    },
    {
      id: 2,
      name: 'Quality Education',
      color: 'red'
    },
    {
      id: 3,
      name: 'Decent Work',
      color: 'red'
    },
    {
      id: 4,
      name: '導師/教師',
      color: 'grey'
    },
    {
      id: 5,
      name: '管理工作',
      color: 'grey'
    }
  ]
}
const userTestMock = [
  {
    url: '/api/user/getUserInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return userInfo
    }
  },
  {
    url: '/api/posts',
    timeout: 1000,
    method: 'get',
    response: () => {
      return postInfo
    }
  },
  {
    url: '/api/post',
    timeout: 1000,
    method: 'get',
    response: () => {
      return postDetail
    }
  }
  // {
  //   url: new RegExp('/api/post' + '.*').source,
  //   timeout: 1000,
  //   method: 'get',
  //   response: () => {
  //     return postDetail
  //   }
  // }
]

export default userTestMock as MockMethod[]
