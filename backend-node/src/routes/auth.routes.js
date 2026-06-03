const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Ruta login funcionando 🚀');
});

router.post('/login', (req, res) => {

    const { email, password } = req.body;

    if(email === 'admin@test.com' && password === '123456'){
        return res.json({
            success: true,
            message: 'Login exitoso'
        });
    }

    return res.status(401).json({
        success: false,
        message: 'Credenciales incorrectas'
    });

});

module.exports = router;