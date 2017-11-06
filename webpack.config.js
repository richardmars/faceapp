var config = {
   entry: ['whatwg-fetch', 'babel-polyfill',  './main.js'],
	
   output: {
      path:'/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
                
            query: {
               presets: ['es2015', 'react']
            }
         },
         { test: /\.css$/, loader: "style!css" }
      ]
   }
}

module.exports = config;
