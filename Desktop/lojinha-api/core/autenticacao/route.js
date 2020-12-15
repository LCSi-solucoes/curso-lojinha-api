const controller = require('./controller');   

module.exports = (app) => {
    app.post('/logar', controller.logar);
}