'use strict';

var server = require('server');
var ProductMgr = require('dw/catalog/ProductMgr');

server.get('ProductList', function (req, res, next) {
    res.render("product/productfound", {product: ProductMgr.getProduct(req.data) } );
    return next();

});


module.exports = server.exports();