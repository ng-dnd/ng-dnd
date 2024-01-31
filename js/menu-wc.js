'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@ng-dnd/core documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#additional-pages"'
                            : 'data-bs-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/quickstart.html" data-type="entity-link" data-context-id="additional">Quickstart</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/guide.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#additional-page-de53d01c911c233ac9c814a9e8a870aac95bf35d5786afd21e71a772ae53a71b34923ee5966c8208f5e473f461eac9a8b5a1384490292f3d11002ea95cf116bf"' : 'data-bs-target="#xs-additional-page-de53d01c911c233ac9c814a9e8a870aac95bf35d5786afd21e71a772ae53a71b34923ee5966c8208f5e473f461eac9a8b5a1384490292f3d11002ea95cf116bf"' }>
                                                <span class="link-name">Guide</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-de53d01c911c233ac9c814a9e8a870aac95bf35d5786afd21e71a772ae53a71b34923ee5966c8208f5e473f461eac9a8b5a1384490292f3d11002ea95cf116bf"' : 'id="xs-additional-page-de53d01c911c233ac9c814a9e8a870aac95bf35d5786afd21e71a772ae53a71b34923ee5966c8208f5e473f461eac9a8b5a1384490292f3d11002ea95cf116bf"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/guide/1.-creating-connections.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">1. Creating connections</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/guide/2.-connecting-to-dom.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">2. Connecting to DOM</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/guide/3.-monitoring-state.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">3. Monitoring State</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/chess-tutorial.html" data-type="entity-link" data-context-id="additional">Chess Tutorial</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/translating-react-code.html" data-type="entity-link" data-context-id="additional">Translating React Code</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/testing.html" data-type="entity-link" data-context-id="additional">Testing</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/DndModule.html" data-type="entity-link" >DndModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/DragPreviewDirective.html" data-type="entity-link" >DragPreviewDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/DragSourceDirective.html" data-type="entity-link" >DragSourceDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/DropTargetDirective.html" data-type="entity-link" >DropTargetDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Connection.html" data-type="entity-link" >Connection</a>
                            </li>
                            <li class="link">
                                <a href="classes/DragLayerConnectionClass.html" data-type="entity-link" >DragLayerConnectionClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/DragSourceMonitorClass.html" data-type="entity-link" >DragSourceMonitorClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/DropTargetMonitorClass.html" data-type="entity-link" >DropTargetMonitorClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/Reconnector.html" data-type="entity-link" >Reconnector</a>
                            </li>
                            <li class="link">
                                <a href="classes/Source.html" data-type="entity-link" >Source</a>
                            </li>
                            <li class="link">
                                <a href="classes/SourceConnector.html" data-type="entity-link" >SourceConnector</a>
                            </li>
                            <li class="link">
                                <a href="classes/Target.html" data-type="entity-link" >Target</a>
                            </li>
                            <li class="link">
                                <a href="classes/TargetConnector.html" data-type="entity-link" >TargetConnector</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DndService.html" data-type="entity-link" >DndService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddSubscription.html" data-type="entity-link" >AddSubscription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BackendFactoryInput.html" data-type="entity-link" >BackendFactoryInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BackendInput.html" data-type="entity-link" >BackendInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConnectionBase.html" data-type="entity-link" >ConnectionBase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Connector.html" data-type="entity-link" >Connector</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DragLayer.html" data-type="entity-link" >DragLayer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DragLayerMonitor.html" data-type="entity-link" >DragLayerMonitor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DragPreviewOptions.html" data-type="entity-link" >DragPreviewOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DragSource.html" data-type="entity-link" >DragSource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DragSourceMonitor.html" data-type="entity-link" >DragSourceMonitor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DragSourceOptions.html" data-type="entity-link" >DragSourceOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DragSourceSpec.html" data-type="entity-link" >DragSourceSpec</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DropTarget.html" data-type="entity-link" >DropTarget</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DropTargetMonitor.html" data-type="entity-link" >DropTargetMonitor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DropTargetSpec.html" data-type="entity-link" >DropTargetSpec</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FactoryArgs.html" data-type="entity-link" >FactoryArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MonitorBase.html" data-type="entity-link" >MonitorBase</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Offset.html" data-type="entity-link" >Offset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SourceConstructor.html" data-type="entity-link" >SourceConstructor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TargetConstructor.html" data-type="entity-link" >TargetConstructor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});