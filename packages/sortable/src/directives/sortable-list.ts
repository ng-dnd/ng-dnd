import { NgTemplateOutlet } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { DndService } from '@ng-dnd/core';
import { DndSortable } from './sortable';
import { DndSortableTemplate, TemplateContext } from './sortable-template';

@Component({
  selector: 'dnd-sortable-list',
  template: `
    @for (card of children; let i = $index; track trackById(i, card)) {
      <ng-container *ngTemplateOutlet="template; context: { $implicit: contextFor(card, i) }" />
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // allow injecting the directive and getting the component
  providers: [{ provide: DndSortable, useExisting: DndSortableList }],
  imports: [NgTemplateOutlet],
})
export class DndSortableList<Data>
  extends DndSortable<Data>
  implements OnChanges, OnInit, AfterContentInit, AfterViewInit, OnDestroy
{
  @Input() template: TemplateRef<TemplateContext<Data>> | null = null;

  /** @ignore */
  @ContentChildren(DndSortableTemplate, {
    read: TemplateRef,
  })
  set renderTemplates(ql: QueryList<TemplateRef<TemplateContext<Data>>>) {
    if (ql.length > 0) {
      this.template = ql.first;
    }
  }

  /** @ignore */
  constructor(dnd: DndService, el: ElementRef<HTMLElement>, cdr: ChangeDetectorRef) {
    super(dnd, el, cdr);
  }

  /** @ignore */
  trackById = (_index: number, data: Data) => {
    return this.spec.trackBy(data);
  };

  /** @ignore */
  ngAfterContentInit() {
    if (!this.template) {
      throw new Error(
        'You must provide a <ng-template cardTemplate> as a content child, or with [template]="myTemplateRef"'
      );
    }
  }

  // forwarding lifecycle events is required until Ivy renderer

  /** @ignore */
  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }

  /** @ignore */
  ngOnInit() {
    super.ngOnInit();
  }

  /** @ignore */
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  /** @ignore */
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
