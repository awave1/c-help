const Router = require('koa-router');
const weather = require('./weather');

const router = new Router({
  prefix: '/api/v1',
});

router.use('/weather', weather.routes(), weather.allowedMethods());

router.get('/', ctx => {
  ctx.body = {
    endpoints: router.stack.map(p => p.path),
  };
});

module.exports = router;
