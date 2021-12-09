const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');

const config = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'VIETNAM BACKPACKER HOSTELS';
                return args;
            });
    }
};

if (process.env.NODE_ENV === 'production') {
    config.configureWebpack = {
        optimization: {
            minimize: true,
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        output: {
                            comments: false
                        }
                    }
                }),
                new CssnanoPlugin({
                    cssnanoOptions: {
                        preset: [
                            'default',
                            {
                                discardComments: {
                                    removeAll: true
                                }
                            }
                        ]
                    }
                })
            ]
        },
    };
}

module.exports = config;