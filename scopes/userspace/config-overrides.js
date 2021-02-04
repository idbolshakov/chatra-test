const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  return alias({
    'components': 'src/components',
    'contexts': 'src/contexts',
    'common': 'src/common',
    'utils': 'src/utils',
  })(config)
}
