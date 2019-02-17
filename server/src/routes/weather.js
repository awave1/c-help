const Router = require('koa-router');

const { getCurrentWeather } = require('../util/openWeather');

const router = new Router();

router.post('/hook', async ctx => {
  const weather = await getCurrentWeather('Calgary');
  console.log('hook', weather);
  ctx.body = {
    currentTemp: weather.main.temp,
    descriptionWeather: weather.weather.map(o => o.description).join(', '),
    fulFillmentText: ' ',
    fulFillmentMessage: [{ text: { text: weather.main.temp } }],
    status: ' ',
  };
});

module.exports = router;
