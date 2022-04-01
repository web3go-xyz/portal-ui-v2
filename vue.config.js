module.exports = {
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            require('unplugin-element-plus/webpack')({
                // options
            }),
        ],
    },
}