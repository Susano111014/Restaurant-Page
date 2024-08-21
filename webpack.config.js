const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Restaurant Page',
        filename: 'bundle.html',
        inject: 'body',
    })],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    //  optimization: {
    //      runtimeChunk: 'single',
    // },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(mp4|MP4)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\..html$/i,
            loader: "html-loader"
        }
        ]
    },

}