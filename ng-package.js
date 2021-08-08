module.exports = {
    deleteDestPath: !process.env.WATCH_MODE,
    lib: {
        entryFile: "public-api.ts",
        cssUrl: "inline",
        umdModuleIds: {
            // vendors
            "tslib": "tslib",
            "dnd-core": "dndCore",
            "dnd-multi-backend": "dndMultiBackend",
            "react-dnd-html5-backend": "dndHtml5Backend",
            "react-dnd-touch-backend": "dndTouchBackend",

            // local
            "@ng-dnd/core": "ngDnd",
        }
    },
    whitelistedNonPeerDependencies: [
        ".",
        "dnd-core",
        "dnd-multi-backend",
        "react-dnd-html5-backend",
        "react-dnd-touch-backend",
    ]
}
