const Router = require('koa-router');

const router = new Router();

router.post('/hook', ctx => {
  ctx.body = {
    text: 'weather is -30',
  };
});

module.exports = router;
