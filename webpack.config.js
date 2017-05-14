// webpack.config.js
const webpack = require('webpack');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: {
        index: ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080', './src/es6/main.js'],
        vendor: ['vue', 'markdown'],
    },
    output: {
        path: path.join(__dirname, '/dist/js'),
        filename: '[name].js',
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test')],
        }],
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        },
    },
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        // 提取公共文件
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('dev') },
        }),
        new webpack.HotModuleReplacementPlugin(),
        // 如需压缩js文件，将以下注释去掉
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     warnings: false
        //   }
        // })
    ],
};
