import { ngPackagr } from 'ng-packagr';

export const isWatchMode = !!process.env.WATCH_MODE;

ngPackagr()
  .forProject('./ng-package.js')
  .withTsConfig('../../tsconfig.build.json')
  .build({
    watch: isWatchMode,
  })
  .then(() => {})
  .catch(err => {
    console.error(err);

    if (!isWatchMode) {
      process.exitCode = 1;
    }
  });
