const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const router = require('./routes/root');

const app = new Koa();

if (process.env.NODE_ENV === 'production') {
  const publicPath = path.resolve(__dirname, '../../client/build');
  console.log(`Serving: ${publicPath}`);
  app.use(serve(publicPath));
}

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
