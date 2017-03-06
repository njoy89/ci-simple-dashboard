var fs = require('fs');
var path = require('path');

module.exports = function (req, res, next) {
    const id = req.query.id;

    fs.readFile(path.join(__dirname, 'mocks', id + '.json'), 'utf8', function (err, data) {
        if (err) {
            res.json([]);
            return;
        }

        res.json(JSON.parse(data));
    });
};
