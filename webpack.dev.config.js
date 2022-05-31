const HtmlWepackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: "development",

    module: {
        rules: [

            // Loading js babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            // Loading images
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [
                    { 
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            },
   
            // Loading fonts
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    { 
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },

            // Loading Css
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            
            // Loading Scss/Sass
            {
                test: /\.s[ca]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }

        ]
    },

    plugins: [
        new HtmlWepackPlugin({
            template: 'public/index.html'
        }),
    ],

    devServer: {
        open: true
    }
};