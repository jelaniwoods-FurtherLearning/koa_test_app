const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();

// Replace with DB
const things = ["My Family", "Programming", "Music"]

// JSON Pretty Middleware
app.use(json());

// Body parser
app.use(bodyParser());
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

// Routes
router.get("/", index);
router.get("/add", showAdd);
router.post("/add", add);


// List of things
async function index(ctx) {
  await ctx.render("index", {
    title: "Things I Love",
    things: things
  });
}
// Show add page
async function showAdd(ctx) {
  await ctx.render("add");
}
// post to add page
async function add(ctx) {
  const body = ctx.request.body;
  things.push(body.thing);
  ctx.redirect("/");
}


router.get("/test", ctx => (ctx.body = "Hello World"));

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());


app.listen(3000, () => console.log("Server Started..."));
