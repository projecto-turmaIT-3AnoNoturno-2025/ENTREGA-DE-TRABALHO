// Node.js: Configuração do servidor backend
const express = require('express'); // Framework para APIs RESTful
const http = require('http'); // Módulo para criar servidor HTTP
const socketIo = require('socket.io'); // Biblioteca para WebSocket
const routes = require('./routes'); // Rotas da API

// Node.js: Inicializa o aplicativo Express
const app = express();
// Node.js: Cria servidor HTTP
const server = http.createServer(app);
// WebSocket: Configura Socket.io no servidor
const io = socketIo(server);

// Node.js: Configurações do Express
app.use(express.json()); // Permite parsing de JSON nas requisições
app.use(express.static('public')); // Serve arquivos estáticos da pasta public
app.use('/api', routes); // Define rotas da API

// WebSocket: Gerencia conexões de clientes
io.on('connection', (socket) => {
    console.log('Novo usuário conectado');
    // WebSocket: Recebe e retransmite mensagens do chat
    socket.on('chatMessage', (msg) => {
        io.emit('message', msg); // Envia mensagem a todos os clientes
    });
    // WebSocket: Lida com desconexão de clientes
    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    });
});

// Node.js: Inicia o servidor na porta especificada
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});