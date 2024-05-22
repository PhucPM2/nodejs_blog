const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const port = 3000;
const app = express();

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(morgan("combined"));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//routes init
route(app);

                        app.listen(port, () => {
                            console.log(`Example app listening on port ${port}`);
                              });
