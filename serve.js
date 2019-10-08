const Koa = require("koa")
const KoaRouter = require("koa-router")
const next = require("next")

const dev = process.env.NODE_ENV != "production"
const app = next({dev})
const handle = app.getRequestHandler()

/*app.prepare().then(() => {   /!*代码编译完成后执行*!/
    const server = new Koa()
    server.use(async (ctx, next) => {

    })
})*/

const server = new Koa()
const router = new KoaRouter()

/*server.use(async (ctx, next) => {
   /!* const path = ctx.path
    const method = ctx.method
    ctx.body = `<span style='color:red'>${path},${method}</</span>`*!/
    await next()
})*/

router.get("/test/:id", (ctx) => {
    console.log(345)
   /* ctx.set*/
    ctx.body = `<span style='color:red'>Koa Router${ctx.params.id}</span>`
})

console.log(router.routes())
server.use(router.routes())

server.listen(4000, () => {
    console.log("启动成功")
})
