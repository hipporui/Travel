const  index =  require('./mock/index.json')   // vue.config.js
const city = require('./mock/city.json')
const detail = require('./mock/detail.json')
module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/api/index', function(req, res) {
                    res.json(index);
                })
                app.get('/api/city', function(req, res) {
                    res.json(city);
                })
                app.get('/api/index', function(req, res) {
                    res.json(detail);
                })
            },
            // proxy: {
            //     "/hippo": {
            //         target: "http://localhost:8080", // /git/search/repositories?q=vue&sort=stars&order=desc 
            //         changeOrigin: true,
            //         pathRewrite: { "^/hippo": "./data.json" }
            //     }
            // }
            // proxy: {
            //     "/hippo": {
            //         target: "http://dict.youdao.com/suggest", // /git/search/repositories?q=vue&sort=stars&order=desc 
            //         changeOrigin: true,
            //         pathRewrite: { "^/hippo": "" }
            //     }
            // }
        }
    }
}