//Models
const Product = require('../models/product'); 

exports.getAddProducts = (req, res, next) => {
    res.render('admin/add-product', { pageTitle: 'Add Product', path: '/admin/add-products' }) //rendering pug file
    // res.sendFile(path.join(rootDir, 'views','add-product.html'));  //rendering pure html file
}

exports.addNewProduct = (req, res, next) => {
    const products = new Product(req.body.title);
    products.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(
        products => {
        res.render('shop/product-list', {prods: products, pageTitle: 'Shop', path: '/' })
        }
    );
  
}