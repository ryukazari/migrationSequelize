import express, { json } from 'express';
import morgan from 'morgan';
import 'dotenv/config';
const bodyParser = require('body-parser');

//const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
app.set('port', port);

import Usuario from './Routes/usuario.routes';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use('/api/usuario', Usuario);

export default app;