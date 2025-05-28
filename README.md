Projeto Página Web Multitemática

Descrição
Este projeto é uma aplicação web que demonstra o uso de AJAX, WebSocket, Node.js e Bootstrap para criar três layouts interativos: um formulário de contato, um chat em tempo real e uma página de login. O código inclui comentários detalhados indicando onde cada tecnologia é usada, conforme os requisitos do projeto.
Estrutura do Projeto
projeto-pagina-web/
├── public/
│   ├── index.html          # Formulário de contato (AJAX)
│   ├── chat.html           # Chat em tempo real (WebSocket)
│   ├── login.html          # Login com validação (AJAX)
│   ├── estilos.css         # Estilos personalizados
│   ├── scripts.js          # Validação e lógica frontend
├── server/
│   ├── app.js              # Servidor Node.js
│   ├── routes.js           # Rotas API
├── package.json            # Dependências e scripts
├── README.md               # Documentação

Tecnologias Utilizadas

Frontend: HTML, CSS, JavaScript, Bootstrap 5
Backend: Node.js, Express.js, Socket.io
Validação: JavaScript (frontend) e Express (backend)

Funcionalidades

index.html: Formulário de contato que envia dados via AJAX e exibe resposta sem recarregar (fetch()).
chat.html: Chat em tempo real usando WebSocket (Socket.io).
login.html: Formulário de login com validação frontend e backend via AJAX.

Requisitos Atendidos

AJAX: Comunicação assíncrona nos formulários de contato e login.
WebSocket: Comunicação bidirecional no chat.
Node.js: Backend com Express.js (APIs) e Socket.io (WebSocket).
Bootstrap: Interface responsiva com navbar, grid, formulários, modal e alertas.
Código Comentado: Cada arquivo contém comentários indicando o uso das tecnologias.
Responsividade: Media queries e grid do Bootstrap garantem adaptação a diferentes telas.

Comentários no Código

Todos os arquivos incluem comentários detalhados, como:
// AJAX: Envia dados do formulário de contato ao servidor
// WebSocket: Recebe mensagens do servidor e exibe no chat
// Bootstrap: Navbar responsiva, conforme requisito de layout responsivo
// Node.js: Configuração do servidor backend


PASSOS PARA EXECUTAR O PROJECTO. 

I - Pre-requisitos
Instalar nodejs e npm

II - PASSO-A-PASSO
1 - Abra o terminar
2 - Navega até o diretório: projecto-pagina-web> 
3 - Digita: npm install express
4 - Digita npm start ou npm run start
5 - Vá no navegador e digita na barra de pesquisa o seguinte url: http://localhost:3000

No caso de chat, para poder simular conversas,abra outra janela e coloca na barra de pesquisa: http://localhost:3000/chat.html

Desta forma terá dois ambientes e poderá simular conversas entre usuraios.

Na página de login o username é 'isolado' e senha é '1234'
