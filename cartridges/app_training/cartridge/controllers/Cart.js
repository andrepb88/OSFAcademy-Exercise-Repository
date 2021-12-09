'use strict';

var server = require('server');

server.extend(module.superModule);

server.append('Show', function (req, res, next) {
    var viewData = res.getViewData();

    viewData.exemple = "One string"

    res.setViewData(viewData);

    return next();
});

module.exports = server.exports();