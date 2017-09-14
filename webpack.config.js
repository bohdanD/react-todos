var path = require("path");
module.exports = {
    entry:{
        app: ["./index.js"]
    },
    output: {
        path: path.resolve(__dirname),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module:{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
            presets:['react']
        }
    }
};