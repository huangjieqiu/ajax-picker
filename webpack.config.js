module.exports = {
  entry : {
   'ajax-picker': "./src/ajax-picker.js"
  },
  output : {
    path: __dirname + '/build',
    filename: "[name].min.js",
    library: 'AjaxPicker',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '10000'
            }
          }
        ]
      }
    ]
  }
}