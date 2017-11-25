
//Konfiguracja Webpack

module.exports = {
      entry: "./src/scripts/main.jsx",
    output: { filename: "./js/out.js" },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2' , 'react'] }
            },
                {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
              },
              {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader','sass-loader']
              },
              {
                test: /react-icons\/(.)*(.js)$/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015', 'stage-2' , 'react']
                }
            }
            ]
          },
    devServer: {
      inline: true,
      contentBase: './',
      port: 3001
      },
}
