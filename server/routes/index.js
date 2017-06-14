const msgController = require('../controllers').messages;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Messages API!',
  }));

  app.post('/api/messages', msgController.create);
  app.get('/api/messages', msgController.list);
  app.get('/api/messages/:messagesID', msgController.retrieve);
  app.put('/api/messages/:messagesID', msgController.update);
  app.delete('/api/messages/:messagesID', msgController.destroy);
};