const Koa = require('koa');
const json = require('koa-json');


const app = new Koa();
app.use(json);
// easy api service
// app.use(async ctx => ctx.body = {msg: "Hello World"});
// There's an extra module koa-json
app.use(async ctx => ctx.body = "Hello World");

app.listen(3000, () => console.log("Server Started..."));
