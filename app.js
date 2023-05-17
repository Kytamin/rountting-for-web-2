const http = require('http');
const url = require('url');
const fs = require('fs');
const handlers = require('./src/handle')

let server = http.createServer(function (req, res) {
    let parseUrl = url.parse(req.url, true);
    let path = parseUrl.pathname;
    let trimPath = path.replace(/^\/+|\/+$/g, '');

    let chosenHandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handlers.notFound;
    chosenHandler(req, res);
});
let router = {
    'users': handlers.users,
    'products': handlers.products
}

server.listen(3000, function () {
    console.log('server running at localhost:3000 ')
});
