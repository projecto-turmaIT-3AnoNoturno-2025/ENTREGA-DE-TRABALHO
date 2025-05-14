// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // AJAX: Validação e envio do formulário de contato (index.html)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Impede o recarregamento da página
            // Obtém os valores dos campos
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const responseDiv = document.getElementById('response');

            // Validação do email no frontend
            if (!validateEmail(email)) {
                // Bootstrap: Exibe alerta de erro
                responseDiv.innerHTML = '<div class="alert alert-danger">Email inválido!</div>';
                return;
            }

            // AJAX: Envia dados do formulário ao servidor usando fetch()
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, message })
                });
                const data = await response.json();
                // Bootstrap: Exibe resposta do servidor como alerta
                responseDiv.innerHTML = `<div class="alert alert-${data.status}">${data.message}</div>`;
            } catch (error) {
                // Bootstrap: Exibe erro em caso de falha
                responseDiv.innerHTML = '<div class="alert alert-danger">Erro ao enviar mensagem!</div>';
            }
        });
    }

    // AJAX: Validação e envio do formulário de login (login.html)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Impede o recarregamento da página
            // Obtém os valores dos campos
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const responseDiv = document.getElementById('loginResponse');

            // Validação no frontend
            if (username.length < 3 || password.length < 3) {
                // Bootstrap: Exibe alerta de erro
                responseDiv.innerHTML = '<div class="alert alert-danger">Usuário ou senha inválidos!</div>';
                return;
            }

            // AJAX: Envia credenciais ao servidor usando fetch()
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                // Bootstrap: Exibe resposta do servidor como alerta
                responseDiv.innerHTML = `<div class="alert alert-${data.status}">${data.message}</div>`;
            } catch (error) {
                // Bootstrap: Exibe erro em caso de falha
                responseDiv.innerHTML = '<div class="alert alert-danger">Erro ao fazer login!</div>';
            }
        });
    }

    // WebSocket: Lógica do chat em tempo real (chat.html)
    const chatForm = document.getElementById('chatForm');
    const chatBox = document.getElementById('chatBox');
    if (chatForm && chatBox) {
        // WebSocket: Conecta ao servidor usando Socket.io
        const socket = io();
        // WebSocket: Envia mensagem ao servidor
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = document.getElementById('chatMessage').value;
            if (message.trim()) {
                socket.emit('chatMessage', message);
                document.getElementById('chatMessage').value = '';
            }
        });

        // WebSocket: Recebe mensagens do servidor e exibe no chat
        socket.on('message', (msg) => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('p-2');
            messageElement.textContent = msg;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight; // Rola para a última mensagem
        });
    }

    // Função auxiliar para validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});