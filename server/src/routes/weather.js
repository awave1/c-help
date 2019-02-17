const Router = require('koa-router');
const openWeather = require('../util/openWeather');

const router = new Router();

router.post('/hook', async ctx => {
  const { body } = ctx.request;
  const allRequiredParamsPresent = body.queryResult.allRequiredParamsPresent;

  if (allRequiredParamsPresent) {
    const geoCity = body.queryResult.parameters['geo-city'];
    const {
      main: { temp: currentTemp },
      weather,
    } = await openWeather.getCurrentWeather(geoCity);

    const weatherDescription = weather.map(o => o.description).join(', ');
    ctx.body = {
      fulfillmentText: `Weather in ${geoCity} is ${currentTemp}!`,
    };
  }
});

module.exports = router;
