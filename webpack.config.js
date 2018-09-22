const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
    template:'./assets/index.template.html',
    filename:'index.html'
})
const page2 =new HtmlWebpackPlugin({
    template:'./assets/index2.template.html',
    filename:'index2.html'
})
module.exports={
    entry:'./assets/javascript/entry.js',
    output:{
        publicPath:'/',
        path:path.join(__dirname,'..'),
        filename:'dist/javascript/bundle.js'
    },
    plugins:[htmlWebpack,page2],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    }
}