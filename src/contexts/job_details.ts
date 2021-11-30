import { FetchJobDetailsQuery } from '../graphql/schema'

export type Job = NonNullable<NonNullable<FetchJobDetailsQuery['job']>>
