import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DndModule } from '@ng-dnd/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { DndSortableModule, DraggedItem, HoverTrigger, SortableSpec } from '@ng-dnd/sortable';
import * as faker from 'faker';

interface SimpleData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-fixed-sortable',
  styleUrls: ['./fixed-height.component.scss'],
  templateUrl: './fixed-height.component.html',
  standalone: true,
  imports: [DndModule, DndSortableModule, DndMultiBackendModule, AsyncPipe],
})
export class FixedHeightComponent {
  fake = () => faker.fake('fix the {{hacker.abbreviation}} {{hacker.noun}}');

  // you need data types that have a unique value, like SimpleData.id
  list: SimpleData[] = [
    { id: 1, name: this.fake() },
    { id: 2, name: this.fake() },
    { id: 3, name: this.fake() },
    { id: 4, name: this.fake() },
    { id: 5, name: this.fake() },
  ];

  // for holding modifications while dragging
  tempList: SimpleData[] = this.list;

  simpleSpec: SortableSpec<SimpleData> = {
    type: 'FIXER',
    // trackBy is required
    trackBy: x => x.id,
    hover: item => {
      this.tempList = this.move(item);
    },
    drop: item => {
      // save the changes
      this.tempList = this.list = this.move(item);
    },
    endDrag: _item => {
      // revert
      this.tempList = this.list;
    },
  };

  move(item: DraggedItem<SimpleData>) {
    // shallow clone the list
    // do this so we can avoid overwriting our 'saved' list.
    const temp = this.list.slice(0);
    // delete where it was previously
    temp.splice(item.index, 1);
    // add it back in at the new location
    temp.splice(item.hover.index, 0, item.data);
    return temp;
  }

  hoverTrigger = HoverTrigger.fixed;
}
