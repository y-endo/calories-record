module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'last 1 version',
        loose: true,
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true }
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ]
};
