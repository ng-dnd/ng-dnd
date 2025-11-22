// From @ngrx-utils
// https://github.com/ngrx-utils/ngrx-utils

import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, inject } from '@angular/core';

export class NgLetContext {
  $implicit: any = null;
  ngLet: any = null;
}

@Directive({
  selector: '[ngLet]',
})
export class NgLetDirective implements OnInit {
  private _vcr = inject(ViewContainerRef);
  private _templateRef = inject<TemplateRef<NgLetContext>>(TemplateRef);

  private _context = new NgLetContext();

  @Input()
  set ngLet(value: any) {
    this._context.$implicit = this._context.ngLet = value;
  }

  ngOnInit() {
    this._vcr.createEmbeddedView(this._templateRef, this._context);
  }
}
