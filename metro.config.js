const {getDefaultConfig} = require('expo/metro-config')
const path = require('path')

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname)
  const {
    resolver: {sourceExts, assetExts}
  } = defaultConfig

  // Adding "ttf" to the list of asset extensions
  config.resolver.assetExts.push('ttf')

  return {
    ...defaultConfig,
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false
        }
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer')
    },
    resolver: {
      ...defaultConfig.resolver,
      assetExts: [...assetExts],
      sourceExts: [...sourceExts, 'svg']
    }
  }
})()
