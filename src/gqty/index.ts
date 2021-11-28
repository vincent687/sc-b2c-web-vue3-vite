/**
 * GQTY: You can safely modify this file and Query Fetcher based on your needs
 */

import type { QueryFetcher } from 'gqty'
import { createClient } from 'gqty'
import type { GeneratedSchema, SchemaObjectTypes, SchemaObjectTypesNames } from './schema.generated'
import { generatedSchema, scalarsEnumsHash } from './schema.generated'

const queryFetcher: QueryFetcher = async function (query, variables) {
  // Modify "/api/graphql" if needed

  // const endpoint = '/api/graphql'
  const endpoint = 'http://api.sit.salut.socialcareer.org/graphql'
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    }),
    mode: 'cors'
  })

  const json = await response.json()

  return json
}

export const client = createClient<GeneratedSchema, SchemaObjectTypesNames, SchemaObjectTypes>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher
})

export const { query, mutation, mutate, subscription, resolved, inlineResolved, refetch, track } =
  client

export * from './schema.generated'
