// module.exports = {
//     entry: "./src/index.tsx",
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx|tsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader"
//                 }
//             }
//         ]
//     }
// };

module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
  
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
  
    // Add '.ts' and '.tsx' as resolvable extensions.
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },

    // module: {
    //     loaders: [
    //       {
    //         test: /\.jsx?$/,
    //         loader: 'babel',
    //         exclude: /node_modules/,
    //         query: {
    //           cacheDirectory: true,
    //           presets: ['react', 'es2015']
    //         }
    //       }
    //     ]
    //   }
  
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader"
            }
          ]
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: "pre",
          test: /\.(js|jsx|tsx)$/,
          loader: "source-map-loader"
        }
      ]
    },
  
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
      react: "React",
      "react-dom": "ReactDOM"
    }
  };