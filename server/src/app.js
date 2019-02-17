const Koa = require('koa');
const serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
const path = require('path');
const router = require('./routes/root');

const app = new Koa();

if (process.env.NODE_ENV === 'production') {
  const publicPath = path.resolve(__dirname, '../../client/build');
  console.log(`Serving: ${publicPath}`);
  app.use(serve(publicPath));
}

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
