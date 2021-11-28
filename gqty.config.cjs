/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: false,
  scalarTypes: { DateTime: 'string' },
  introspection: { endpoint: 'http://api.sit.salut.socialcareer.org/graphql', headers: {} },
  destination: './src/gqty/index.ts',
  subscriptions: false,
  javascriptOutput: false
}

module.exports = config
