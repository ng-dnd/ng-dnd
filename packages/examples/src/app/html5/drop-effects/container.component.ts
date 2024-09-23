import { Component } from '@angular/core';
import { ExampleLinkComponent } from '@app/utility/example-link.component';
import { BoxComponent } from './box.component';
import { CopyTargetComponent } from './copy-target.component';

@Component({
  selector: 'de-container',
  template: `
    <app-example-link path="html5/drop-effects" />
    <p>
      When you are using the HTML5 backend, you can use native HTML5 drop effects to convey what
      kind of operation a user is performing through the icon next to their cursor.
    </p>
    <p>
      The default behaviour is the 'move' effect with a switch to 'copy' when you hold the Alt key.
      However, any of the
      <code>copy</code>, <code>move</code>, <code>link</code>, or <code>none</code>
      effects may be forced for any particular drag source. Simply pass
      <code>[dragSourceOptions]="{{ '{' }} dropEffect: ... {{ '}' }}"</code>.
    </p>
    <p>
      The drop effect is available in a drag source's <code>endDrag</code> method. It is attached to
      the object returned from <code>monitor.getDropResult()</code>. You can then access is with
      <code>result.dropEffect</code>.
    </p>
    <de-box (dropped)="lastEffect = $event" />
    <de-box force="copy" (dropped)="lastEffect = $event" />
    <de-box force="move" (dropped)="lastEffect = $event" />
    <de-box force="link" (dropped)="lastEffect = $event" />
    <de-box force="none" (dropped)="lastEffect = $event" />
    <de-copy-target>
      @if (lastEffect) {
        <p>
          Dropped with the <code>{{ lastEffect }}</code> effect.
        </p>
      }
    </de-copy-target>
  `,
  standalone: true,
  imports: [ExampleLinkComponent, BoxComponent, CopyTargetComponent],
})
export class ContainerComponent {
  lastEffect = '';
}
