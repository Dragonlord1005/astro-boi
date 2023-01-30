module.exports = {
    plugins: [
        require('autoprefixer'),
        // ! cssnano is causing an unocss bug
        // require('cssnano')
    ]   
}