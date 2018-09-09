/*eslint no-console: 0 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

if (process.env.NODE_ENV !== 'production') {
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes.js')(app);

const server = app.listen(port, function() {
  console.log('Listening on port %s...', server.address().port);
});

process.on('SIGINT', function() {
  console.log('Caught interrupt signal');
  process.exit();
});
