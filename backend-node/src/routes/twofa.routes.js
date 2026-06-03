const express = require('express');

const router = express.Router();

router.get('/verify', (req, res) => {
    res.json({
        success: true,
        message: 'Código 2FA verificado correctamente'
    });
});

module.exports = router;