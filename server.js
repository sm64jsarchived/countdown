const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = process.env.PORT || 3000

const endTime = new Date(Date.UTC(2025, 8, 6, 18, 0, 0)).getTime()

app.use(express.static('public'))

setInterval(() => {
  const now = Date.now()
  const remaining = endTime - now
  io.emit('countdown', remaining > 0 ? remaining : 0)
}, 1000)

http.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})
