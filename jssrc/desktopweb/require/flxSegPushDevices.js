define("flxSegPushDevices", function() {
    return function(controller) {
        var flxSegPushDevices = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxSegPushDevices",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0i1d1e6f0320547",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366]
        }, {}, {});
        flxSegPushDevices.setDefaultUnit(kony.flex.DP);
        var lblDeviceName = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblDeviceName",
            "isVisible": true,
            "skin": "CopydefLabel0c11b82bf040744",
            "text": "Label",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDeviceId = new kony.ui.Label({
            "id": "lblDeviceId",
            "isVisible": false,
            "left": "0",
            "skin": "defLabel",
            "text": "Label",
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSegPushDevices.add(lblDeviceName, lblDeviceId);
        return flxSegPushDevices;
    }
})