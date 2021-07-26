define("CopyflxDevicesSegment", function() {
    return function(controller) {
        var CopyflxDevicesSegment = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "CopyflxDevicesSegment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        CopyflxDevicesSegment.setDefaultUnit(kony.flex.DP);
        var txtDeviceName = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "defTextBoxFocus",
            "height": "80%",
            "id": "txtDeviceName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "2%",
            "secureTextEntry": false,
            "skin": "CopydefTextBoxNormal3",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0",
            "width": "16%"
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoCorrect": false,
            "placeholderSkin": "defTextBoxPlaceholder"
        });
        var flxEditButtons = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEditButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0f753b44c354b46",
            "top": "0",
            "width": "10%"
        }, {}, {});
        flxEditButtons.setDefaultUnit(kony.flex.DP);
        var Edit = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "Edit",
            "isVisible": true,
            "onTouchEnd": controller.AS_Label_e587c4de9c1d4f079cef9b3317f8e063,
            "skin": "CopyCopyslFontAwesomeIcon3",
            "text": "",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgOk = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50%",
            "id": "imgOk",
            "isVisible": false,
            "left": "0",
            "onTouchEnd": controller.AS_Image_a757a45392974197aa290d8b96f64671,
            "skin": "slImage",
            "src": "done_black_24dp_1.png",
            "top": "0",
            "width": "50%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgCancel = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50%",
            "id": "imgCancel",
            "isVisible": false,
            "left": "50%",
            "onTouchEnd": controller.AS_Image_b4b99946a9d94190b4f5e451bca4b4ae,
            "skin": "slImage",
            "src": "clear_black_24dp_1.png",
            "top": "0",
            "width": "50%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEditButtons.add(Edit, imgOk, imgCancel);
        var flxStatus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxStatus",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "10%"
        }, {}, {});
        flxStatus.setDefaultUnit(kony.flex.DP);
        var imgActive = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "50%",
            "id": "imgActive",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "tick_1.png",
            "top": "0",
            "width": "50%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgSuspend = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "50%",
            "id": "imgSuspend",
            "isVisible": false,
            "left": "0",
            "skin": "slImage",
            "src": "cross_1.png",
            "top": "0",
            "width": "50%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxStatus.add(imgActive, imgSuspend);
        var lblValidFromValue = new kony.ui.Label({
            "height": "100%",
            "id": "lblValidFromValue",
            "isVisible": true,
            "left": "40%",
            "skin": "CopyCopydefLabel0gffd94dd60034f",
            "text": "Label",
            "top": "0",
            "width": "20%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblValidToValue = new kony.ui.Label({
            "height": "100%",
            "id": "lblValidToValue",
            "isVisible": true,
            "left": "60%",
            "skin": "CopyCopydefLabel0gffd94dd60034f",
            "text": "Label",
            "top": "0",
            "width": "20%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnChangeStatus = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "defBtnFocus",
            "height": "70%",
            "id": "btnChangeStatus",
            "isVisible": true,
            "left": "84%",
            "onClick": controller.AS_Button_c9174637f75d475aae1d12132cd9f2a6,
            "skin": "CopysknActive",
            "text": "Button",
            "top": "0",
            "width": "12%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDeviceId = new kony.ui.Label({
            "id": "lblDeviceId",
            "isVisible": false,
            "left": "0",
            "skin": "defLabel",
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyflxDevicesSegment.add(txtDeviceName, flxEditButtons, flxStatus, lblValidFromValue, lblValidToValue, btnChangeStatus, lblDeviceId);
        return CopyflxDevicesSegment;
    }
})