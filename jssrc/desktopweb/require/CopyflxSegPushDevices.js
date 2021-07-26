define("CopyflxSegPushDevices", function() {
    return function(controller) {
        var CopyflxSegPushDevices = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "CopyflxSegPushDevices",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0g0c21b1ba1fb4c",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366]
        }, {}, {});
        CopyflxSegPushDevices.setDefaultUnit(kony.flex.DP);
        var lblDeviceName = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblDeviceName",
            "isVisible": true,
            "skin": "CopyCopydefLabel0bf1f8551e66c46",
            "text": "Label",
            "width": kony.flex.USE_PREFFERED_SIZE,
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
        CopyflxSegPushDevices.add(lblDeviceName, lblDeviceId);
        return CopyflxSegPushDevices;
    }
})