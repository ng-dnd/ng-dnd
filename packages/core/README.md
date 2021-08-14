# @ng-dnd/core

[![Build Status](https://www.travis-ci.com/ng-dnd/ng-dnd.svg?branch=main)](https://www.travis-ci.com/ng-dnd/ng-dnd)
[![npm](https://img.shields.io/npm/v/@ng-dnd/core.svg)](https://www.npmjs.com/package/@ng-dnd/core)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ng-dnd/ng-dnd/blob/master/LICENSE)

Ng-DnD is a toolkit for building complex drag and drop interfaces in Angular. It is based on, and very similar to [`react-dnd`](https://react-dnd.github.io/react-dnd/) by [Dan Abramov](https://github.com/gaearon) and others, and is also powered by [`dnd-core`](https://github.com/react-dnd/react-dnd/tree/master/packages/dnd-core). It is compatible with all backends.

#### [Check out the examples here](https://ng-dnd.github.io/ng-dnd/examples/).

## Installation

```sh
yarn add @ng-dnd/core react-dnd-html5-backend
```

Next, follow the [Quickstart](./additional-documentation/quickstart.html) and check out the [Tutorial](./additional-documentation/chess-tutorial.html).

## Sub-packages

- [`@ng-dnd/multi-backend`](https://ng-dnd.github.io/ng-dnd/multi-backend/)
- [`@ng-dnd/sortable`](https://ng-dnd.github.io/ng-dnd/sortable/)

## Features

- Make any component draggable, or into a drop target.
- Doesn't mutate the DOM, and doesn't use classes and CSS to do 'callbacks'.
  Every visible change is made through Angular templates.
- The truth lives in JavaScript, with unidirectional data flow (like
  [`@ngrx/store`](https://github.com/ngrx/platform))
- Observable APIs, designed to fit in Angular.
- TypeScript friendly, with strong typing for in-flight objects, and inline
  documentation.
- Works with HTML5 drag and drop, and all other `react-dnd` backends.

## Goals

- **High performance.** All code runs outside the Angular zone, and re-enters in batches only where strictly necessary, such that change detection runs precisely as many times as you need it to, with no extra configuration. You should also be able to take full advantage of `OnPush` change detection.

- Largely possible to **translate `react-dnd` code** and examples into Angular (see [Translating React Code](./additional-documentation/translating-react-code.html)).

- **Comprehensive documentation** and tons of example code, written in Angular style.

## What can you do with it?

Instead of building maximally-ergonomic solutions to simple use cases, `react-dnd` and `@ng-dnd` provide an abstraction over most things you could want to do with drag and drop. They are lower-level building blocks that make it easy to implement some very complex interactions. They assign no specific meaning to a drag/drop operation. You get to define what happens when a drag starts or ends or hovers. Here are some ambitious examples:

- The [traditional `react-dnd` tutorial](http://react-dnd.github.io/react-dnd/examples-chessboard-tutorial-app.html), a chess board with movable pieces and rules
- Deleting items by dragging them to a 'trash can', like in the macOS dock.
- Stamping out a template by dragging the template into a work area
- Merging two items by dragging one on top of the other
- Hover over a 'folder' for a few seconds to 'drill down' into it
- The famous lists and cards on [trello.com](https://trello.com), which actually uses `react-dnd`
- A diagramming tool where you can draw links between nodes
- A 2D CAD program
- A graphical query builder, or visual data pipeline like [Luna](http://www.luna-lang.org/)
- [Many other demonstrations of `react-dnd` (most with GIFs) in use](https://github.com/react-dnd/react-dnd/issues/384)

## Alternatives

It is important to note that for bare-bones sortable lists, where you have a mutable array of simple values, you don't necessarily need the superpowers in this library. There are plenty of cookie-cutter solutions out there, like the quite powerful [`ng2-dnd`](https://github.com/akserg/ng2-dnd) or [`ng2-dragula`](https://github.com/valor-software/ng2-dragula), which may get you to your deadline faster than learning and using `@ng-dnd`. But be warned; you may find yourself wanting more dragging power once you get a taste. In fact, this package was born when [@cormacrelf](https://github.com/cormacrelf) got sick of maintaining `ng2-dragula` and watching users struggle to implement what `react-dnd` was born for.

If Angular and React aren't your thing, there's also [`vue-react-dnd`](https://github.com/jenshaase/vue-react-dnd).

## Issues

Not all issues are `@ng-dnd`-related. If you think you found a bug in `dnd-core` or with the HTML5 backend, those issues belong on [that codebase](https://github.com/react-dnd/react-dnd) with their many contributors and wealth of experience. If there is a problem with another backend you are using, file an issue with that backend so you can get more specific help and so that the community can benefit.

Issues and potential improvements to `@ng-dnd` are discussed on [GitHub](https://github.com/ng-dnd/ng-dnd).

## License

This library is released under the MIT license. It depends on `dnd-core`, which is (now) also under the MIT license.
