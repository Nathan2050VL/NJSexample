const express = require('express');


exports.postAddProduct = (req, res, next => {
    res.render('add-product', {
        pageTitle: 'Add-product',
        path: 'admin/add-product',
        formCss: true,
        productCss: true,
        activeAddProduct: true
    })
})
exports.getAddProduct = (req, res, next => {
    product.push({ title: req.body.title })
    res.redirect('/');
})