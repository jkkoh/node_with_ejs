const express = require('express');
const routes = require('./routes/home');
const path = require('path');
const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('server listening on port 3000');
});
app.use('/', routes);
app.use('/test', routes);

app.use((req, res) => {
    res.status(404).send('page not found');
})
