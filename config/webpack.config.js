const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.resolve(__dirname + './../src/index.js'),
    output: {
        path: path.resolve(__dirname + './../dist'),
        filename: 'tf-vue-leaflet-ruler.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}