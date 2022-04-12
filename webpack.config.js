const apiDefs = require("./src");
const package = require("./package.json");

//name your root endpoint here like EMR_WCF_Common,....
const apiRoot = package.apiRoot || "/test-api/"; 

//setting the auto paort on availability to run it on specific conifgure number type ex: 8080 
const appPort = package.appPort ||"auto"; 

const baseConfig = (env) => {
    const isProd = env?.WEBPACK_SERVE;
    console.log(env);
    return {
        mode: "development",
        devServer: {
            https: package.https,
            open: [apiRoot],
            port: appPort,
            compress: true,
            hot: true,
            historyApiFallback: true,
            liveReload: true,
            static: false,
            // proxy: {
            // },
            client: {
                logging: "info",
                overlay: false,
                progress: true,
            },
            setupMiddlewares: (middlewares, devServerConf) => {
                if (!devServerConf) {
                    throw new Error("webpack dev server is not configured!");
                }
                apiDefs.forEach(modMw => {
                    modMw(devServerConf.app, apiRoot);
                });
                return middlewares;
            }
        },
    }
};


module.exports = (env) => {
    return baseConfig(env);
};