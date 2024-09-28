import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { DndModule, DndService } from '@ng-dnd/core';
import { NativeTypes } from 'react-dnd-html5-backend';

interface NativeUrl {
  urls: string[];
}
interface NativeText {
  text: string;
}
interface NativeFile {
  files: File[];
}

@Component({
  selector: 'native-target',
  template: `
    <div class="target" [dropTarget]="target" [dropTargetTypes]="type">
      <p>
        Accepts <code>{{ type }}</code>
      </p>
      <ng-content />
      @if (dropped) {
        <pre>{{ dropped | json }}</pre>
      }
    </div>
  `,
  styles: `
    :host {
      min-width: 200px;
    }
    .target {
      padding: 8px;
      background: #ddd;
      min-height: 140px;
    }
    pre {
      overflow-x: auto;
    }
  `,
  standalone: true,
  imports: [DndModule, JsonPipe],
})
export class TargetComponent implements OnDestroy {
  @Input() type = '';
  droppedType: any = null;
  dropped: any = null;

  target = this.dnd.dropTarget<NativeUrl | NativeText | NativeFile>(null, {
    drop: monitor => {
      this.droppedType = monitor.getItemType() as string;
      const item = monitor.getItem();
      if (monitor.getItemType() === NativeTypes.FILE) {
        const files = (item as NativeFile).files.map(f => `File named ${f.name}`);
        this.dropped = { files };
      } else {
        this.dropped = item;
      }
      this.cdr.detectChanges();
    },
  });

  constructor(private dnd: DndService, private cdr: ChangeDetectorRef) {}

  ngOnDestroy() {
    this.target.unsubscribe();
  }
}
