const express = require('express');
const cors = require('cors');

const app = express();

const port = 3000;

const connectDB = require('./config/db');
const bodyParser = require('body-parser');

// Connect Database
connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// app.get('/', (req, res)=>{
//  res.json({
//     message :"hellow"
//  })
// })

app.use('/', require('./routes/indexRoute'));

app.listen(port,() =>{
    console.log(`server is running on port ${port}`);
    
})

