const mongodb = require('mongodb')
connectionString = 'mongodb+srv://todoappuser:todoappuser@cluster0-to-do.b5gol.mongodb.netComplexApp?retryWrites=true&w=majority'
mongodb.connect(connectionString,{useNewUrlParser:true, useUnifiedTopology: true},(err,client) => {
  
})