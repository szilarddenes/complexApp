const express = require('express')
const app = express()

const router =require('./router')


app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static('public'))

console.log('[#] nodemon watch is running.congrats.')

app.use('/',router)

app.listen(3000)