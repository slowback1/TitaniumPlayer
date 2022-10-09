/* eslint-disable */
export default {
  displayName: 'design',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/design',
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
