const url = require('url');
const fs = require('fs');
const handlers={}

handlers.products = function (rep, res) {
    fs.readFile('./views/products.html','utf8', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};
handlers.users = function (rep, res) {
    fs.readFile('./views/users.html','utf8', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};
handlers.notFound = function (rep, res) {
    fs.readFile('./views/notfound.html','utf8', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};

module.exports =handlers