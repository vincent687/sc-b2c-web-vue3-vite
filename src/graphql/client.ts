import { createClient } from 'villus'

const client = createClient({
  url: 'https://api.sit.salut.socialcareer.org/graphql',
  // url: 'https://gateway.api.salut.socialcareer.org/graphql'
})

export default client
