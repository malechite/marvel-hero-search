const serveStatic = require('serve-static');
const path = require('path');
const rickAndMorty = require('./rickAndMorty');

const appRouter = (app) => {
  const sendJSON = function(res, payload) {
    res.setHeader('Content-Type', 'application/json');
    res.send(payload);
  };

  app.use(serveStatic(path.join(__dirname, '/../dist/')));

  app.post('/api/characters', (req, res) => {
    (async() => {
      let characters = await rickAndMorty.getCharacters();
      if (characters) {
        sendJSON(res, {'status':'success', 'characters':characters});
      } else {
        res.status(500);
        sendJSON(res, {'status':'error', 'message':'Could not complete request!'});
      }
    })();
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
  });
};

module.exports = appRouter;
