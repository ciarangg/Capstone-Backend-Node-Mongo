require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



app.listen(port, () => {
    console.log(`I'm listening on ${port}`)
})


