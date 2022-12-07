const express = require('express');

exports.getIndex = (req, res, next => {
    console.log(adminData.product);
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCss: true,
        layout: false
    })
})