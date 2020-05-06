module.exports = {
  name: 'rx-form',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/rx-form',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
