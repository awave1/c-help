const request = require('request-promise-native');

const URL = params =>
  `https://api.openweathermap.org/data/2.5/weather?q=${params}&units=metric&appid=0915cdff7d7c7b2fcdfea98dfb2adace`;

const getCurrentWeather = async city => {
  console.log(URL(city));
  const response = await request.get(URL(city));
  return JSON.parse(response);
};

module.exports = { getCurrentWeather };
