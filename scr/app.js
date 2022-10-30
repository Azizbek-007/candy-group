require('dotenv').config();
const express = require('express');
const app = express();
const Route = require('./Routes/api.routes');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/v1', Route);

app.use('/', (req, res) => {
    res.status(404).json({success: false, code: 404, message: 'Not Found', payload: {}});
})
app.listen(3000, () => console.log("Hello World")); 