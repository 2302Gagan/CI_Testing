define("flxDevicesSegment", function() {
    return function(controller) {
        var flxDevicesSegment = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "flxDevicesSegment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxDevicesSegment.setDefaultUnit(kony.flex.DP);
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
            "skin": "defTextBoxNormal0be898c7e866142",
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
            "skin": "CopyslFbox0jbe453b2998b48",
            "top": "0",
            "width": "10%"
        }, {}, {});
        flxEditButtons.setDefaultUnit(kony.flex.DP);
        var Edit = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "Edit",
            "isVisible": true,
            "onTouchEnd": controller.AS_Label_c2ad9f7986e847c9824ebc811ee59b0b,
            "skin": "CopyslFontAwesomeIcon0b8bfbe2a87cd42",
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
            "onTouchEnd": controller.AS_Image_ca8e1bd2cdd043a1b166b4ec3f068890,
            "skin": "slImage",
            "src": "done_black_24dp.png",
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
            "onTouchEnd": controller.AS_Image_ad6f681115284e759446133933623457,
            "skin": "slImage",
            "src": "clear_black_24dp.png",
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
            "src": "tick.png",
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
            "src": "cross.png",
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
            "skin": "CopydefLabel0je26767a88cb45",
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
            "skin": "CopydefLabel0je26767a88cb45",
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
            "onClick": controller.AS_Button_ed954cf3f048491a94ede533ed1aae64,
            "skin": "sknActive",
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
        flxDevicesSegment.add(txtDeviceName, flxEditButtons, flxStatus, lblValidFromValue, lblValidToValue, btnChangeStatus, lblDeviceId);
        return flxDevicesSegment;
    }
})