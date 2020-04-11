const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
require.extensions['.less'] = () => {};
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/home:type', async (ctx) => {
    const type = ctx.params.type
    await handle(ctx.req, ctx.res, {
      pathname: '/home',
      query: {
        type
      }
    })
    ctx.respond = false
  })
  server.use(router.routes())
  server.use(async (ctx, _next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
  })
})


