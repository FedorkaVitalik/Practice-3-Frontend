const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
	res.render('frontend');
});

app.listen(3001, 'localhost');