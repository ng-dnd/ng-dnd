module.exports = {
  deleteDestPath: !process.env.WATCH_MODE,
  lib: {
    entryFile: 'public-api.ts',
    cssUrl: 'inline'
  },
  allowedNonPeerDependencies: [
    '.',
    'dnd-core',
    'dnd-multi-backend',
    'react-dnd-html5-backend',
    'react-dnd-touch-backend',
  ]
};
