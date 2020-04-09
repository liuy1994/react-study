const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/home:type', async (ctx) => {
    await handle(ctx.req, ctx.res, {
      pathname: '/home',
      require: {
        type: 'hom2'
      }
    })
    ctx.respond = false
  })
  server.arguments(router.routes())
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listenerCount(3000, () => {
    console.log('Server is running at http://localhost:3000')
  })
})


