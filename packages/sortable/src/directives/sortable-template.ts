import { Directive } from '@angular/core';
import { RenderContext } from '../types';

export interface TemplateContext<Data> {
  $implicit: RenderContext<Data>;
}

@Directive({
  selector: '[dndSortableTemplate]',
  standalone: true,
})
export class DndSortableTemplate {}
