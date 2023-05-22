import fastify from 'fastify'
import { memoreisRoutes } from './routes/memories'
import cors from '@fastify/cors'

const app = fastify()
app.register(cors, {
  origin: true, // todas as urls de front pode acessar o back
})
app.register(memoreisRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Serve on na porta 3333')
  })
