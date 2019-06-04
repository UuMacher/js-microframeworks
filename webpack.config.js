const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const isDevelopment = argv.mode === 'development';

    return {
        entry: {
            'hyperapp-hello-world': './hyperapp/examples/hello-world/index.jsx',
            'hyperapp-todo-list': './hyperapp/examples/todo-list/index.jsx',
            'hyperapp-counter': './hyperapp/examples/counter/index.jsx',
            'svelte-hello-world': './svelte/examples/hello-world/index.js',
            'svelte-todo-list': './svelte/examples/todo-list/index.js',
            'svelte-counter': './svelte/examples/counter/index.js',
            'code-presenter': './code-presenter.js'
        },
        mode: isDevelopment ? 'development' : 'production',
        output: {
            filename: `js/[name].js`,
            path: path.resolve(__dirname, 'dist')
        },
        devtool: isDevelopment ? 'eval-source-map' : 'nosource-source-map',
        devServer: {
            contentBase: './dist'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true
                    },
                },
            },
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: isDevelopment
                            }
                        },
                        'css-loader'
                    ],
                },
                {
                    test: /\.(html|svelte)$/,
                    exclude: /node_modules/,
                    use: ['svelte-loader']
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: 'css/[name].css',
            }),
        ].filter((plugin) => !!plugin)
    }
};