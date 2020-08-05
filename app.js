const express = require('express')
const path = require('path')
const db = require('./config/connection')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', (request, response) => {
    response.render('index.html')
})

let messages = db.lerMensagens()

io.on('connection', socket => {

    socket.on('limparMensagens', function () {
        messages = []
        db.limparMensagens()
        socket.broadcast.emit('apagarMensagens')
    })

    socket.emit('socketId', socket.id)

    socket.emit('previousMessages', messages)

    socket.on('sendMessage', data => {
        db.adicionarMensagem(data)
        messages.push(data)
        socket.broadcast.emit('receivedMessage', data)
    })
})

server.listen(9000)