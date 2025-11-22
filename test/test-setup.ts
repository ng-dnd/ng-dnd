import 'jest-localstorage-mock';
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance'],
});
