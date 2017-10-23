var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.post('/mock-practice', function (req, res) {

    console.log(JSON.stringify(req.body));
    res.json(req.body);
});

app.listen(5000, function () {
    console.log('Practice app listening on port 6000!');
});
