const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
//const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module : {
          
        rules : [
            {   
                test : /\.(js|jsx)$/, 
                include : [
                    path.resolve(__dirname, 'src')
                ],
                use : ['babel-loader', 'eslint-loader']
            }, 

            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ],
                include: /\.module\.css$/
            },

            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'})
    ]
}