let mix = require('laravel-mix');

mix.webpackConfig({
    module: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    }
});


mix.styles([
    './node_modules/foundation-sites/dist/css/foundation.min.css',
], './js/public.js');

/**
 * Versioning process
 */
mix.version();
