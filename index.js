const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const layouts = require('express-ejs-layouts');

const PORT = process.env.PORT || 3000;

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// body-parser to parse request body
// app.use(bodyParser.urlencoded());

// static files
app.use(express.static('public'));

// enabling session
// app.use(session({
//     secret: 'some_secret_key', 
//     cookie: {}
// }));

// use layouts
app.use(layouts);
app.set('layout', 'layouts/main.ejs');

// routes
const index = require('./routes/index');

app.use('/', index);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});