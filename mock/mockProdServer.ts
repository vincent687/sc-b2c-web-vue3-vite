import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import userTestMock from '.'

export function setupProdMockServer() {
  createProdMockServer([...userTestMock])
}
