# Ng DnD

[![Build Status](https://www.travis-ci.com/ng-dnd/ng-dnd.svg?branch=main)](https://www.travis-ci.com/ng-dnd/ng-dnd)
[![CodeFactor](https://www.codefactor.io/repository/github/ng-dnd/ng-dnd/badge)](https://www.codefactor.io/repository/github/ng-dnd/ng-dnd)
[![npm](https://img.shields.io/npm/v/@ng-dnd/core.svg)](https://www.npmjs.com/package/@ng-dnd/core)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ng-dnd/ng-dnd/blob/master/LICENSE)

Drag and Drop for Angular.

> 🙏 This repo is cloned from [angular-skyhook](https://github.com/cormacrelf/angular-skyhook). Many thanks for [Cormac Relf](https://github.com/cormacrelf)'s work!

| Package                 | Description                       | Docs              |
| ----------------------- | --------------------------------- | ----------------- |
| `@ng-dnd/core`          | A toolkit for DnD                 | [Docs][core-docs] |
| `@ng-dnd/multi-backend` | Multi backend system for DnD core | [Docs][back-docs] |
| `@ng-dnd/sortable`      | Sortable system for DnD core      | [Docs][sort-docs] |

#### Quick links

[Documentation][core-docs] |
[Examples][examples]

## Why I create this project?

The `angular-skyhook` is a great library, but I had encountered some frustrations.

- It dosen't support **Angular Ivy** (v9+), please check [this issue](https://github.com/cormacrelf/angular-skyhook/issues/512) for more details.
- It hasn't been maintained for almost two years, the version of `dnd-core` and other packages are very old.
- The naming of some directives and properties aren't very intuitive such as `ssSortable`.

## Compatibility

| Angular           | @ng-dnd/core |
| ----------------- | ------------ |
| >= 13.0.0         | 2.x          |
| >= 9.0.0 < 13.0.0 | 1.x          |

## License

MIT

[core-docs]: https://ng-dnd.github.io/ng-dnd/
[back-docs]: https://ng-dnd.github.io/ng-dnd/multi-backend/
[sort-docs]: https://ng-dnd.github.io/ng-dnd/sortable/
[examples]: https://ng-dnd.github.io/ng-dnd/examples/
