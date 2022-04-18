const banks = require('../app/controllers/banks');

module.exports = (app) => {
  app.get('/banks', banks.getAll);
  app.post('/banks', banks.create);
  app.put('/banks/:id', banks.update);
  app.delete('/banks/:id', banks.remove);
};
