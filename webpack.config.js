const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const isDevelopment = argv.mode === 'development';

    return {
        entry: {
            'hyperapp-hello-world': './hyperapp/examples/hello-world/index.js',
            'svelte-hello-world': './svelte/examples/hello-world/index.js'
        },
        mode: isDevelopment ? 'development' : 'production',
        output: {
            filename: `js/[name].[hash:6]${isProduction ? '.min' : ''}.js`,
            path: path.resolve(__dirname, 'dist')
        },
        devtool: isDevelopment ? 'eval-source-map' : 'nosource-source-map',
        devServer: {
            contentBase: './dist'
        },
        module: {
            rules: [
                {
                    test: /\.(html|svelte)$/,
                    exclude: /node_modules/,
                    use: 'svelte-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader'
                    ]
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin()
        ].filter((plugin) => !!plugin)
    }
};