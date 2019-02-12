const mix = require('laravel-mix');

mix.setPublicPath(path.normalize('../public_html'));

mix.js('resources/js/app.js', 'public_html/js')
   .sass('resources/sass/app.scss', 'public_html/css');
