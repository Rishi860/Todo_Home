const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

require('./routes')(app)

mongoose.connect('mongodb://localhost:27017/todo_data',{
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
  // we're connected!
  app.listen(8081)
  console.log('app started at port 8081');
});