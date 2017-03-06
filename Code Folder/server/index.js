var express = require('express');
var path = require('path');
var engine = require('ejs-locals');
var morgan = require('morgan');

var dataCtrl = require('./controllers/items.js');

var app = express();

app.use(morgan(':date[iso] :method :url :status :response-time [s]'));

app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/api/items', dataCtrl);

app.use('/static', express.static(path.join(__dirname, '../', 'public')));

app.get('/', function (req, res) {
    const env = process.env.NODE_ENV;
    let cssBundleHref;
    let jsBundleSrc;
    if (env === 'development') {
        cssBundleHref = 'http://localhost:3001/public/main.css';
        jsBundleSrc = 'http://localhost:3001/public/main.bundle.js';
    } else {
        cssBundleHref = '/static/main.css';
        jsBundleSrc = '/static/main.bundle.js';
    }

    res.render('index.ejs', {
        cssBundleHref,
        jsBundleSrc
    });
});

app.use(function (req, res) {
    res.status(404).end();
});

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(JSON.stringify(err));
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`Listening on port ${ port }`);
});
