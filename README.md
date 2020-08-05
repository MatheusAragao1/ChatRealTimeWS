# Chat em tempo real

Desenvolvido usando o Node.js, Socket.io, Express, Bootstrap, Jquery e Sqlite3.

Para o funcionamento da aplicação necessário executar os seguintes comandos na pasta da aplicação pelo terminal ( Pode instalar os pacotes individualmente ):

```bash
npm install
npm start
```

O projeto irá rodar na porta 9000, logo acesse localhost:9000

## Funcionalidades

No menu principal da aplicação irá mostrar o seu socketId atual, o botão 'Limpar banco de dados' no menu apaga todos os registros da tabela 'mensagens' e reflete a exclusão das mensagens para todos os usuários conectados a aplicação.

Uma cor de fonte nova é gerada automáticamente para cada socketId.
