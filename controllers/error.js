exports.get404 = (req, res, next) => {
    res.render('error-page', { pageTitle: 'Page Not Found', path:''});
    // res.sendFile(path.join(rootDir, 'views', 'error-page.html'));
}