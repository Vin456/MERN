const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views', './views');

// extract styles and script
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(expressLayouts);

app.use('/', require('./routes'));


app.listen(port, (err) => {
    if(err) {
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running on ${port}`);
})