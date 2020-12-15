const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.headers['Authorization'];

    if(!token) return res.status(401).json({
        message: 'Usuário não autenticado'
    });

    jwt.verify(token, 'segredo', (err, decod) => {
        if(err){
            return res.status(401).json({
                message: 'Usuário não autenticado'
            });
        }

        req.userId = decod.id;
        next();
    })

}