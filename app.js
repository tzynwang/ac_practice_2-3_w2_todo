const express = require('express')
const app = express()
const port = 3000

const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App is running on http://localhpst:${port}`)
})
