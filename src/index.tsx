import { Hono,  } from 'hono'
import { renderer } from './renderer'
import { serveStatic } from "@hono/node-server/serve-static"


const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello World!</h1>)
})
app.use("/*", serveStatic({ root: "public/"})) // path must end with '/'

export default app
