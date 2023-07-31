const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const enviromentVariables = require('./configs/envVariablesConfig');

const routers = require('./routers');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(body_parser.json());

app.use('/api/', routers);

app.listen(enviromentVariables.server_port, () => {
    console.log(`App is running at localhost:${enviromentVariables.server_port}`);
});
