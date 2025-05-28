// Node.js: Configuração de rotas para a API
const express = require('express');
const router = express.Router();

// Node.js: Endpoint para formulário de contato (usado por AJAX)
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Validação dos dados recebidos
    if (!name || !email || !message) {
        return res.json({ status: 'danger', message: 'Preencha todos os campos!' });
    }
    // Simula o processamento (pode integrar com banco de dados)
    res.json({ status: 'success', message: 'Mensagem enviada com sucesso!' });
});

// Node.js: Endpoint para login (usado por AJAX)
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Simulação de validação (substituir por autenticação real)
    if (username === 'isolado' && password === '1234') {
        res.json({ status: 'success', message: 'Login bem-sucedido!' });
    } else {
        res.json({ status: 'danger', message: 'Usuário ou senha incorretos!' });
    }
});

// Node.js: Exporta as rotas para uso no app.js
module.exports = router;