import { setupServer } from 'msw/node'
import { handlers } from '../handlers/handlers'

//creating a node.js server to mock requests
const server = setupServer(...handlers)
beforeAll(() => {
    server.listen();
})

export default server; 