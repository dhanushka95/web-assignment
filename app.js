const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./configuration/config');
const dotenv = require('dotenv');
const cors = require('cors');

db.authenticate()
    .then(() => console.log('MySQL Database Connected'))
    .catch(err => console.log('Error: ' + err) );

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/information',require('./routes/informationR'));

app.get("/", (req, res) =>
    res.send("Welcome!")
);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
});
