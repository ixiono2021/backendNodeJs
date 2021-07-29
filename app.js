const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const db = require('./db');
// const router = require('./route');
const router = express.Router();
const PORT = 3000 || process.env.PORT;

app.use(bodyParser.json());

app.use('/', (req, res) => {
    res.status(200).send(`<h1 style="font-size:100px;">Wellcome to IXIONO</h1>`)
})

const server = app.listen(PORT, () => {
  console.log(`Backend app listening at ${PORT}`);
});

