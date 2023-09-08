module.exports = {
    runtimeCompiler: true,
    publicPath: "/",
    devServer: {
        port: 8044,
        compress: true,
        disableHostCheck: true,
        proxy: {
            "/api/": {
                target: "http://10.170.4.68:8045",
                pathRewrite: {"^/api/": ""},
            },

            "/farm-management/": {
                target: "http://localhost:3000/",
                pathRewrite: {"^/farm-management/": ""},
            },
        },
    },
};
