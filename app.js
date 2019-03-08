const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');


const app = new Koa();
const router = new KoaRouter();

// JSON Pretty Middleware
app.use(json());
// easy api service
// app.use(async ctx => ctx.body = {msg: "Hello World"});
// There's an extra module koa-json
// app.use(async ctx => ctx.body = "Hello World");

router.get("/test", ctx => (ctx.body = "Hello World"));

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());


app.listen(3000, () => console.log("Server Started..."));
