const model = require('./model');

module.exports = {
    buscarTodos
};

async function buscarTodos(req, res){

    try{

        let result = await model.findAll({
            raw: true,
            attributes: ['id', 'nome']
        })

    }
    catch(error){
        resizeTo.status(500).json({
            message: 'Deu erro',
            error: error
        })
    }

}

