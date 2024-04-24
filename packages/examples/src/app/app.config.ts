import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withHashLocation,
  withPreloading,
} from '@angular/router';
import { provideDnd } from '@ng-dnd/core';
import { MultiBackend } from '@ng-dnd/multi-backend';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { HotkeyModule } from 'angular2-hotkeys';
import { AppEffects } from './app.effects';
import { CustomTransitions } from './customMultiBackend';
import { metaReducers, reducers } from './reducers';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules), withHashLocation()),
    importProvidersFrom([
      StoreRootModule,
      StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
      }),
      EffectsModule.forRoot([AppEffects]),
      // !environment.production ? StoreDevtoolsModule.instrument() : [],
      HotkeyModule.forRoot(),
    ]),
    provideDnd({
      backend: MultiBackend,
      options: CustomTransitions,
    }),
    // provideDnd({ backend: HTML5Backend }),
    // provideDnd({ backend: TouchBackend }),
    // provideDnd({ backend: MouseBackend }),
  ],
};
