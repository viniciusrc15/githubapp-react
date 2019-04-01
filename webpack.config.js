'use strict'
const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator') // validações de erro no webpack npm install --save-dev webpack-validator

module.exports = validate({
    devtool: 'source-map', // debugar browser  arquivo.js
    entry: [
        'react-hot-loader/patch', //somente dev
        'webpack-dev-server/client?http://localhost:3000', // compilar somente no browser
        'webpack/hot/only-dev-server', // somente quando dev server executando
        path.join(__dirname, 'src', 'index')  // funcionar em todos sistemas operacionais
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // para funcionar o hot loader
    ],
    module: {
        preLoaders: [{ // pra configurar espaços ; e etc npm install --save-dev standard standard-loader@4
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
        }],
        loaders: [{
            test: /\.js$/,  // todo arquivo que termina com js vai procurar para compilar com babel
            exclude: /node_modules/, 
            include: /src/,
            loader: 'babel'
        }]
    },

})
