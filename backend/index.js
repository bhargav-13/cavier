const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

const errorHandler = require('./middleware/errorHandler');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/indexRoute'));
app.use(errorHandler);

app.listen(port,() =>{
    console.log(`server is running on port ${port}`);
    
})

