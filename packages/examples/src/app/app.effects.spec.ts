import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppEffects } from './app.effects';

describe('AppService', () => {
  const actions$ = new Observable<any>();
  let effects: AppEffects;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [AppEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(AppEffects);
  }));

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
