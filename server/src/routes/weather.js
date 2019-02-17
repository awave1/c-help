const Router = require('koa-router');

const router = new Router();

router.get('/', ctx => {
  ctx.body = {
    text: 'weather is -30',
  };
});

module.exports = router;
