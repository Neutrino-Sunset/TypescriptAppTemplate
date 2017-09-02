module.exports = {
   entry: './Main.ts',
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
         }
      ]
   },
   resolve: {
      extensions: [ ".ts", ".js" ]
   },
   output: {
      filename: './dist/TypescriptAppTemplate.js'
   }
}
