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
  console.log(dialogflowResp);
});

module.exports = router;
