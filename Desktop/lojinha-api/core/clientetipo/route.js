const controller = require('./controller');   

module.exports = (app) => {
    app.post('/tipos-de-cliente', controller.buscarTodos);
}