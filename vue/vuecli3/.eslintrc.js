module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/essential'],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  'extends': [
    'plugin:vue/strongly-recommended'
  ]
};
