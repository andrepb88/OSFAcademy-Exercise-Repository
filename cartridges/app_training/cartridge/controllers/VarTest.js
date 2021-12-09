'use strict';

var server = require('server');


server.get('IsmlTest', function (req, res, next) {
    var sessionVar = "One String"
    res.render("training/vartest", { sessionVar: sessionVar });
    return next();
});


module.exports = server.exports();