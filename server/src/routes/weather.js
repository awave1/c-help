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

    const { cod: code, list } = await openWeather.getFiveDayForecast(geoCity);

    const weatherDescription = weather.map(o => o.description).join(', ');

    console.log(list);

    const forecastList = list.map(({ dt_txt, main, weather }) => ({
      payload: {
        date: dt_txt,
        temp: {
          current: main.temp,
          min: main.temp_min,
          max: main.temp_max,
        },
        description: weather.map(o => o.description).join(', '),
      },
    }));

    ctx.body = {
      fulfillmentText: `Today in ${geoCity} is ${currentTemp}, (${weatherDescription})`,
      fulfillmentMessages: forecastList,
    };
  }
});

module.exports = router;
