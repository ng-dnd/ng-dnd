import { Unsubscribe, Identifier } from 'dnd-core';
import areOptionsEqual from '../utils/areOptionsEqual';

export class Reconnector<O = any> {
  handlerId: Identifier | null = null;
  node?: Node;
  options?: O;
  disconnect?: Unsubscribe | null;
  constructor(
    private backendConnector: (handlerId: Identifier, node: Node, options?: O) => Unsubscribe
  ) {}
  reconnect = (parentHandlerId: Identifier | null) => {
    if (this.disconnect) {
      this.disconnect();
      this.disconnect = null;
    }
    this.handlerId = parentHandlerId;
    if (this.handlerId && this.node) {
      this.disconnect = this.backendConnector(this.handlerId, this.node, this.options);
    }
  };
  hook = (nativeElement: Node, options?: O) => {
    if (nativeElement === this.node && areOptionsEqual(options, this.options)) {
      return;
    }

    this.node = nativeElement;
    this.options = options;

    this.reconnect(this.handlerId);
  };
}
