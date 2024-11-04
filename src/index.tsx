import { Hono,  } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello World!</h1>)
})

app.get('/message', (c) => {
  return c.text("Rich was here!")
})

app.get("/message2", c => c.text("Really he was ... Wasn't he?"));

export default app
