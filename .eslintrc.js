module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:react/jsx-runtime'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
