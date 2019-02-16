const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const PORT = process.env.PORT || 8000;

// app.use(async ctx => (ctx.body = { success: true }));

if (process.env.NODE_ENV === 'production') {
  const publicPath = path.resolve(__dirname, '../../client/build');
  console.log(`Serving: ${publicPath}`);
  app.use(serve(publicPath));
}

app.listen(PORT);
