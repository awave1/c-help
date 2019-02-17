const Router = require('koa-router');
const DialogflowController = require('../controller/dialogflowController');
const uuid = require('uuid');

const PROJECT_ID = 'c-help';

const router = new Router();

const dialogflowController = new DialogflowController(PROJECT_ID);

router.get('/', async ctx => {
  const sessionId = uuid.v4();
  const dialogflowResp = await dialogflowController.sendTextMessageToDialogFlow(
    ctx.query.requestText,
    sessionId
  );

  const fulfillmentText = dialogflowResp[0].queryResult.fulfillmentText;
  const fulfillmentMessages = dialogflowResp[0].queryResult.fulfillmentMessages;

  ctx.body = {
    weather: fulfillmentText,
    forecast: fulfillmentMessages.map(f => f.payload.fields),
  };
});

router.get('/weekForecast', async ctx => {});

module.exports = router;
