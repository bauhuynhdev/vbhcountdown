module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'VIETNAM BACKPACKER HOSTELS';
                return args;
            });
    }
};