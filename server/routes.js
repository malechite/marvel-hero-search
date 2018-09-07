var serveStatic = require('serve-static');
var path = require('path');
var marvel = require('./marvel');

var appRouter = (app) => {
  var sendJSON = function(res, payload) {
    res.setHeader('Content-Type', 'application/json');
    res.send(payload);
  };

  app.use(serveStatic(path.join(__dirname, '/../dist/')));

  app.post('/api/heroes', (req, res) => {
    var searchTerm = req.body.searchTerm;
    marvel(searchTerm, function(heroes) {
      if (heroes) {
        sendJSON(res, {'status':'success', 'heroes':heroes});
      } else {
        res.status(500);
        sendJSON(res, {'status':'error', 'message':'Could not complete request!'});
      }
    });
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
  });
};

module.exports = appRouter;
