
const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env)=>{
    const { NODE_ENV } = env
    return{
        mode: NODE_ENV,
        entry: path.resolve(__dirname,'./src/index.js'),
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].js'
        },
        devtool: "source-map",
        module:{
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env",
                        "@babel/preset-react"],
                        plugins: ['@babel/plugin-transform-runtime', [
                            'import', {
                                "libraryName": 'antd',
                                style: 'css'
                            }
                        ]]
                    }
                    }
                }, {
                    test: /\.(css|less)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    strictMath: true
                                }
                            }
                        }
                    ]
                },  {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'asset/resource',
                }
            ]
        },
        resolve: { extensions: [".tsx", ".ts", ".js", ".jsx" ] },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './pubilc/index.html'),
                filename: 'index.html',
                inject: 'body'
            }),
            new CleanWebpackPlugin({
                path: path.resolve(__dirname,'./dist')
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer:{
            host: 'localhost',
            port: 8081,
            open: true,
            hot:true,
            proxy: {
                '/repositorie': {
                    target: 'https://api.github.com/search',
                    changeOrigin: true,
                    secure: false
                }
            }
        }
    }}