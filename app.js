'use strict';
const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const cors = require('cors');
const app = express();
const port = 3000;

const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use('/cat', upload.single('catpic'), catRoute);
app.use('/user', upload.single('catpic'), userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));