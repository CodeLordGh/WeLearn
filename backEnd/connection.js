const mongoose = require ('mongoose');
require ('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.wh4r1pk.mongodb.net/WeCodeAfri?retryWrites=true&w=majority`)
.then (console.log('Connected to mongodb')).catch ((error) => {
    console.log(error)
})