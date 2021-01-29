module.exports = {
  presets: [ 'module:metro-react-native-babel-preset' ],
  plugins: [
    [
      'module-resolver',
      {
        root: [ './src' ],
        extensions: [ '.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json' ],
        alias: {
          '^@assets/(.+)': './src/assets/\\1',
          '^@components/(.+)': './src/components/\\1',
          '^@modules/(.+)': './src/modules/\\1',
          '^@screens/(.+)': './src/modules/screens/\\1',
          '^@shared/(.+)': './src/modules/shared/\\1',
          '^@routes/(.+)': './src/routes/\\1'
        }
      }
    ]
  ]
};
