const app = require('./app');

const PORT = process.env.PORT || 3131;
app.listen(PORT);

console.log(`Running: localhost:${PORT}`);
