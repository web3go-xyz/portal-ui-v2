const { options } = require('less')

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            require('unplugin-element-plus/webpack')({
                // options
            }),
        ],
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'arcoblue-6': '#4318FF',
                },
                javascriptEnabled: true,
            },
        }
    },
    // chainWebpack: config => {
    //     const imagesRule = config.module.rule('less')
    //     imagesRule
    //         .use('less-loader')
    //         .tap(options => {
    //             options.lessOptions = {
    //                 modifyVars: {
    //                     'arcoblue-6': 'red',
    //                 },
    //                 javascriptEnabled: true,
    //             }
    //             return options;
    //         })

    // }

}