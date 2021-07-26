define(function() {
    return function(controller) {
        var qrcodegenerator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "50%",
            "id": "qrcodegenerator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "qrcodegenerator"), extendConfig({}, controller.args[1], "qrcodegenerator"), extendConfig({}, controller.args[2], "qrcodegenerator"));
        qrcodegenerator.setDefaultUnit(kony.flex.DP);
        var brsrQRCodeGenerator = new kony.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "brsrQRCodeGenerator",
            "isVisible": true,
            "left": "0%",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "qrenc3.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "brsrQRCodeGenerator"), extendConfig({}, controller.args[1], "brsrQRCodeGenerator"), extendConfig({}, controller.args[2], "brsrQRCodeGenerator"));
        qrcodegenerator.add(brsrQRCodeGenerator);
        return qrcodegenerator;
    }
})