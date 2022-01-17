const express = require('express');

require('dotenv').config();
const cors = require('cors')

const { dbConnection } = require('./DB/config');


// Crear servidor express
const app = express();

// DB Connection
dbConnection();

// CORS
app.use(cors())

console.log(process.env);


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto:` + process.env.PORT);
})