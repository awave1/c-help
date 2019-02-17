const Router = require('koa-router');

const router = new Router({
  prefix: '/api/v1',
});

router.get('/', ctx => {
  ctx.body = {
    endpoints: router.stack.map(p => p.path),
  };
});

module.exports = router;
