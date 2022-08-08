/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["be/wl/DemoCustomControlGenerator/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
