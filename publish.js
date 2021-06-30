const ghPages = require('gh-pages');

ghPages.publish('dist', function (err) {
    if (err) {
        console.trace();
    }
});