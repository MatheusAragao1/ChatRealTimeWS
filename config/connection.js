const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./config/cadastro.db')

const limparMensagens = () => {
    db.run("DELETE FROM mensagens")
}


const adicionarMensagem = (data) => {
    db.run(`INSERT INTO mensagens VALUES ('${data.author}', '${data.message}', '${data.authorColor}')`)
}

function lerMensagens() {
    const messages = []
    db.each("SELECT * FROM mensagens", function (err, row) {
        messages.push({ author: row.usuario, message: row.mensagem, authorColor: row.corFonte })
    })
    return messages
}

module.exports = {
    adicionarMensagem, lerMensagens, limparMensagens
}



