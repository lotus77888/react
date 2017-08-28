var config = {
   entry: './main.js',
	
   output: {
      path:__dirname,
      filename: 'index.js',
      publicPath: "/"
   },
	
   devServer: {
      inline: true,
      port: 3333,
      host: '192.168.1.4',
      historyApiFallback: true
   
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;