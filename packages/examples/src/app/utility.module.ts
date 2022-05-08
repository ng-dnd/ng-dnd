import { NgModule } from '@angular/core';
import { ExampleLinkComponent } from './example-link.component';
import { NgLetDirective } from './utility/ngLet.directive';

const both = [ExampleLinkComponent, NgLetDirective];

@NgModule({
  declarations: both,
  exports: both,
})
export class UtilityModule {}
