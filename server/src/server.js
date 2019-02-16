const Koa = require("koa");

const app = new Koa();
const PORT = process.env.PORT || 8000;

app.use(async ctx => (ctx.body = { success: true }));

app.listen(PORT);
