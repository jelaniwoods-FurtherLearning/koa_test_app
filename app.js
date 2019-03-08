const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');

const app = new Koa();
const router = new KoaRouter();

// Replace with DB
const things = ["My Family", "Programming", "Music"]

// JSON Pretty Middleware
app.use(json());
// easy api service
// app.use(async ctx => ctx.body = {msg: "Hello World"});
// There's an extra module koa-json
// app.use(async ctx => ctx.body = "Hello World");

render(app, {
  root: path.join(__dirname, "views"),
  layout: "layout",
  viewExt: "html",
  cache: false,
  debug: false
})

// index
router.get("/", async ctx => {
  await ctx.render("index", {title: "Things I Love", things: things});
});

router.get("/test", ctx => (ctx.body = "Hello World"));

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());


app.listen(3000, () => console.log("Server Started..."));
