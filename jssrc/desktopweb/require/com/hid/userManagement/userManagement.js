define(function() {
    return function(controller) {
        var userManagement = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "userManagement",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "userManagement"), extendConfig({}, controller.args[1], "userManagement"), extendConfig({}, controller.args[2], "userManagement"));
        userManagement.setDefaultUnit(kony.flex.DP);
        var flxDevices = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "flxDevices",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxDevices"), extendConfig({}, controller.args[1], "flxDevices"), extendConfig({}, controller.args[2], "flxDevices"));
        flxDevices.setDefaultUnit(kony.flex.DP);
        var lblRegisteredDevices = new kony.ui.Label(extendConfig({
            "id": "lblRegisteredDevices",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopydefLabel0a0871dbeadf24e",
            "text": "Registered Devices",
            "textStyle": {},
            "top": "0%",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "lblRegisteredDevices"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRegisteredDevices"), extendConfig({}, controller.args[2], "lblRegisteredDevices"));
        var flxManageDevices = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40%",
            "id": "flxManageDevices",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0d29cc8eaef0e4c",
            "top": "5%",
            "width": "100%"
        }, controller.args[0], "flxManageDevices"), extendConfig({}, controller.args[1], "flxManageDevices"), extendConfig({}, controller.args[2], "flxManageDevices"));
        flxManageDevices.setDefaultUnit(kony.flex.DP);
        var flxManageDeviceHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxManageDeviceHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "right": "2%",
            "skin": "CopyCopyCopyCopyslFbox5",
            "top": "3%",
            "width": "96%",
            "zIndex": 1
        }, controller.args[0], "flxManageDeviceHeader"), extendConfig({}, controller.args[1], "flxManageDeviceHeader"), extendConfig({}, controller.args[2], "flxManageDeviceHeader"));
        flxManageDeviceHeader.setDefaultUnit(kony.flex.DP);
        var flxFriendlyName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFriendlyName",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flxFriendlyName"), extendConfig({}, controller.args[1], "flxFriendlyName"), extendConfig({}, controller.args[2], "flxFriendlyName"));
        flxFriendlyName.setDefaultUnit(kony.flex.DP);
        var lblFriendlyName = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblFriendlyName",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyCopyCopydefLabel2",
            "text": "Friendly Name",
            "textStyle": {},
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblFriendlyName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFriendlyName"), extendConfig({}, controller.args[2], "lblFriendlyName"));
        flxFriendlyName.add(lblFriendlyName);
        var flxEmpty = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEmpty",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxEmpty"), extendConfig({}, controller.args[1], "flxEmpty"), extendConfig({}, controller.args[2], "flxEmpty"));
        flxEmpty.setDefaultUnit(kony.flex.DP);
        flxEmpty.add();
        var flxStatus = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxStatus",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxStatus"), extendConfig({}, controller.args[1], "flxStatus"), extendConfig({}, controller.args[2], "flxStatus"));
        flxStatus.setDefaultUnit(kony.flex.DP);
        var lblStatus = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblStatus",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyCopyCopydefLabel2",
            "text": "Status",
            "textStyle": {},
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStatus"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStatus"), extendConfig({}, controller.args[2], "lblStatus"));
        flxStatus.add(lblStatus);
        var flxValidFrom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxValidFrom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "40%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flxValidFrom"), extendConfig({}, controller.args[1], "flxValidFrom"), extendConfig({}, controller.args[2], "flxValidFrom"));
        flxValidFrom.setDefaultUnit(kony.flex.DP);
        var lblValidFrom = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblValidFrom",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyCopyCopydefLabel2",
            "text": "Valid From",
            "textStyle": {},
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblValidFrom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValidFrom"), extendConfig({}, controller.args[2], "lblValidFrom"));
        flxValidFrom.add(lblValidFrom);
        var flxValidTo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxValidTo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "60%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flxValidTo"), extendConfig({}, controller.args[1], "flxValidTo"), extendConfig({}, controller.args[2], "flxValidTo"));
        flxValidTo.setDefaultUnit(kony.flex.DP);
        var lblValidTo = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblValidTo",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyCopyCopydefLabel2",
            "text": "Valid To",
            "textStyle": {},
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblValidTo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValidTo"), extendConfig({}, controller.args[2], "lblValidTo"));
        flxValidTo.add(lblValidTo);
        var flxDeviceStatus = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDeviceStatus",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "80%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flxDeviceStatus"), extendConfig({}, controller.args[1], "flxDeviceStatus"), extendConfig({}, controller.args[2], "flxDeviceStatus"));
        flxDeviceStatus.setDefaultUnit(kony.flex.DP);
        var lblDeviceStatus = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblDeviceStatus",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyCopyCopydefLabel2",
            "text": "Device Status",
            "textStyle": {},
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDeviceStatus"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDeviceStatus"), extendConfig({}, controller.args[2], "lblDeviceStatus"));
        flxDeviceStatus.add(lblDeviceStatus);
        flxManageDeviceHeader.add(flxFriendlyName, flxEmpty, flxStatus, flxValidFrom, flxValidTo, flxDeviceStatus);
        var segmentDevices = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "Edit": "",
                "btnChangeStatus": "Button",
                "imgActive": "tickgreen.png",
                "imgCancel": "clear_black_24dp_2.png",
                "imgOk": "done_black_24dp_2.png",
                "imgSuspend": "clear_black_24dp_2.png",
                "lblDeviceId": "",
                "lblValidFromValue": "Label",
                "lblValidToValue": "Label",
                "txtDeviceName": ""
            }, {
                "Edit": "",
                "btnChangeStatus": "Button",
                "imgActive": "tickgreen.png",
                "imgCancel": "clear_black_24dp_2.png",
                "imgOk": "done_black_24dp_2.png",
                "imgSuspend": "clear_black_24dp_2.png",
                "lblDeviceId": "",
                "lblValidFromValue": "Label",
                "lblValidToValue": "Label",
                "txtDeviceName": ""
            }, {
                "Edit": "",
                "btnChangeStatus": "Button",
                "imgActive": "tickgreen.png",
                "imgCancel": "clear_black_24dp_2.png",
                "imgOk": "done_black_24dp_2.png",
                "imgSuspend": "clear_black_24dp_2.png",
                "lblDeviceId": "",
                "lblValidFromValue": "Label",
                "lblValidToValue": "Label",
                "txtDeviceName": ""
            }],
            "groupCells": false,
            "height": "68%",
            "id": "segmentDevices",
            "isVisible": true,
            "left": "2%",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "right": "2%",
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "CopyCopyseg1",
            "rowTemplate": "CopyflxDevicesSegment1",
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "27%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "CopyflxDevicesSegment1": "CopyflxDevicesSegment1",
                "Edit": "Edit",
                "btnChangeStatus": "btnChangeStatus",
                "flxEditButtons": "flxEditButtons",
                "flxStatus": "flxStatus",
                "imgActive": "imgActive",
                "imgCancel": "imgCancel",
                "imgOk": "imgOk",
                "imgSuspend": "imgSuspend",
                "lblDeviceId": "lblDeviceId",
                "lblValidFromValue": "lblValidFromValue",
                "lblValidToValue": "lblValidToValue",
                "txtDeviceName": "txtDeviceName"
            },
            "width": "96%"
        }, controller.args[0], "segmentDevices"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segmentDevices"), extendConfig({}, controller.args[2], "segmentDevices"));
        flxManageDevices.add(flxManageDeviceHeader, segmentDevices);
        var tabSelfService = new kony.ui.TabPane(extendConfig({
            "activeSkin": "CopyCopytabCanvas1",
            "activeTabs": [0],
            "height": "53%",
            "id": "tabSelfService",
            "inactiveSkin": "CopyCopytabCanvasInactive1",
            "isVisible": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX,
            "left": "0dp",
            "top": "47%",
            "viewConfig": {
                "collapsibleViewConfig": {
                    "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                    "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                    "toggleTabs": false
                },
                "pageViewConfig": {
                    "needPageIndicator": true
                },
                "tabViewConfig": {
                    "headerPosition": constants.TAB_HEADER_POSITION_TOP,
                    "image1": "definitePath:images/canvas/widgets/tabpane/arrow-left.svg",
                    "image2": "definitePath:images/canvas/widgets/tabpane/arrow-right.svg"
                },
            },
            "viewType": constants.TABPANE_VIEW_TYPE_TABVIEW,
            "width": "100%"
        }, controller.args[0], "tabSelfService"), extendConfig({
            "layoutType": constants.CONTAINER_LAYOUT_BOX,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tabSelfService"), extendConfig({}, controller.args[2], "tabSelfService"));
        var tabChangePwd = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "100%",
            "id": "tabChangePwd",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "orientation": constants.BOX_LAYOUT_VERTICAL,
            "skin": "CopyCopyslTab1",
            "tabName": "Change Password",
            "width": "100%"
        }, controller.args[0], "tabChangePwd"), extendConfig({
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tabChangePwd"), extendConfig({}, controller.args[2], "tabChangePwd"));
        tabChangePwd.setDefaultUnit(kony.flex.DP);
        var flxChangePassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "85%",
            "id": "flxChangePassword",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0dc287c2b1e664a",
            "top": "2%",
            "width": "90%",
            "zIndex": 3
        }, controller.args[0], "flxChangePassword"), extendConfig({}, controller.args[1], "flxChangePassword"), extendConfig({}, controller.args[2], "flxChangePassword"));
        flxChangePassword.setDefaultUnit(kony.flex.DP);
        var imgLock = new kony.ui.Image2(extendConfig({
            "height": "12%",
            "id": "imgLock",
            "isVisible": false,
            "left": 0,
            "skin": "slImage",
            "src": "passwordicon_3.png",
            "top": "4%",
            "width": "12%",
            "zIndex": 1
        }, controller.args[0], "imgLock"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLock"), extendConfig({}, controller.args[2], "imgLock"));
        var lblOldPassword = new kony.ui.Label(extendConfig({
            "id": "lblOldPassword",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyCopydefLabel0b605d854affa4a",
            "text": "Current Password",
            "textStyle": {},
            "top": "24%",
            "width": "15%",
            "zIndex": 1
        }, controller.args[0], "lblOldPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOldPassword"), extendConfig({}, controller.args[2], "lblOldPassword"));
        var txtOldPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "defTextBoxFocus",
            "height": "12%",
            "id": "txtOldPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "22%",
            "secureTextEntry": true,
            "skin": "CopyCopydefTextBoxNormal5",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "20%",
            "width": "18%",
            "zIndex": 1
        }, controller.args[0], "txtOldPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtOldPassword"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "defTextBoxPlaceholder"
        }, controller.args[2], "txtOldPassword"));
        var lblNewPassword = new kony.ui.Label(extendConfig({
            "id": "lblNewPassword",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyCopydefLabel0b605d854affa4a",
            "text": "New Password",
            "textStyle": {},
            "top": "39%",
            "width": "15%",
            "zIndex": 1
        }, controller.args[0], "lblNewPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNewPassword"), extendConfig({}, controller.args[2], "lblNewPassword"));
        var txtNewPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "defTextBoxFocus",
            "height": "12%",
            "id": "txtNewPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "22%",
            "secureTextEntry": true,
            "skin": "CopyCopydefTextBoxNormal5",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "35%",
            "width": "18%",
            "zIndex": 1
        }, controller.args[0], "txtNewPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtNewPassword"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "defTextBoxPlaceholder"
        }, controller.args[2], "txtNewPassword"));
        var lblConfirmPassword = new kony.ui.Label(extendConfig({
            "id": "lblConfirmPassword",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyCopydefLabel0b605d854affa4a",
            "text": "Confirm Password",
            "textStyle": {},
            "top": "54%",
            "width": "15%",
            "zIndex": 1
        }, controller.args[0], "lblConfirmPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblConfirmPassword"), extendConfig({}, controller.args[2], "lblConfirmPassword"));
        var txtConfirmPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "defTextBoxFocus",
            "height": "12%",
            "id": "txtConfirmPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "22%",
            "secureTextEntry": true,
            "skin": "CopyCopydefTextBoxNormal5",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "50%",
            "width": "18%",
            "zIndex": 1
        }, controller.args[0], "txtConfirmPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtConfirmPassword"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "defTextBoxPlaceholder"
        }, controller.args[2], "txtConfirmPassword"));
        var lblChangePwdNotification = new kony.ui.Label(extendConfig({
            "height": "10%",
            "id": "lblChangePwdNotification",
            "isVisible": true,
            "left": "2%",
            "skin": "CopysknHIDError2",
            "textStyle": {},
            "top": "65%",
            "width": "50%"
        }, controller.args[0], "lblChangePwdNotification"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblChangePwdNotification"), extendConfig({}, controller.args[2], "lblChangePwdNotification"));
        var btnSave = new kony.ui.Button(extendConfig({
            "focusSkin": "defBtnFocus",
            "height": "12%",
            "id": "btnSave",
            "isVisible": true,
            "left": "10%",
            "onClick": controller.AS_Button_ia957a4a99c240cda42456aa4cb65537,
            "skin": "CopysknButton2",
            "text": "SAVE",
            "top": "78%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "btnSave"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSave"), extendConfig({}, controller.args[2], "btnSave"));
        var btnCancel = new kony.ui.Button(extendConfig({
            "focusSkin": "defBtnFocus",
            "height": "12%",
            "id": "btnCancel",
            "isVisible": true,
            "left": "22%",
            "onClick": controller.AS_Button_jd46006c910e42889a8bdca528942c99,
            "skin": "CopysknCancelButton2",
            "text": "CANCEL",
            "top": "78%",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({}, controller.args[2], "btnCancel"));
        var flxPasswordPolicy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPasswordPolicy",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "52%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "48%"
        }, controller.args[0], "flxPasswordPolicy"), extendConfig({}, controller.args[1], "flxPasswordPolicy"), extendConfig({}, controller.args[2], "flxPasswordPolicy"));
        flxPasswordPolicy.setDefaultUnit(kony.flex.DP);
        var lblPasswordPolicy = new kony.ui.Label(extendConfig({
            "id": "lblPasswordPolicy",
            "isVisible": true,
            "left": "2%",
            "skin": "CopyCopydefLabel0a0871dbeadf24e",
            "text": "Password Policy",
            "textStyle": {},
            "top": "10%",
            "width": "100%"
        }, controller.args[0], "lblPasswordPolicy"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPasswordPolicy"), extendConfig({}, controller.args[2], "lblPasswordPolicy"));
        var lblPolicy1 = new kony.ui.Label(extendConfig({
            "id": "lblPolicy1",
            "isVisible": true,
            "left": "2%",
            "skin": "CopyCopydefLabel0b605d854affa4a",
            "textStyle": {},
            "top": "12%",
            "width": "96%"
        }, controller.args[0], "lblPolicy1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPolicy1"), extendConfig({}, controller.args[2], "lblPolicy1"));
        var lblPolicy2 = new kony.ui.Label(extendConfig({
            "id": "lblPolicy2",
            "isVisible": true,
            "left": "2%",
            "skin": "CopyCopydefLabel0b605d854affa4a",
            "textStyle": {},
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblPolicy2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPolicy2"), extendConfig({}, controller.args[2], "lblPolicy2"));
        var lblPolicy3 = new kony.ui.Label(extendConfig({
            "id": "lblPolicy3",
            "isVisible": true,
            "left": "2%",
            "skin": "CopyCopydefLabel0b605d854affa4a",
            "textStyle": {},
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblPolicy3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPolicy3"), extendConfig({}, controller.args[2], "lblPolicy3"));
        var lblPolicy4 = new kony.ui.Label(extendConfig({
            "id": "lblPolicy4",
            "isVisible": true,
            "left": "2%",
            "skin": "CopyCopydefLabel0b605d854affa4a",
            "textStyle": {},
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblPolicy4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPolicy4"), extendConfig({}, controller.args[2], "lblPolicy4"));
        var lblPolicy5 = new kony.ui.Label(extendConfig({
            "id": "lblPolicy5",
            "isVisible": true,
            "left": "2%",
            "skin": "CopyCopydefLabel0b605d854affa4a",
            "textStyle": {},
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblPolicy5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPolicy5"), extendConfig({}, controller.args[2], "lblPolicy5"));
        flxPasswordPolicy.add(lblPasswordPolicy, lblPolicy1, lblPolicy2, lblPolicy3, lblPolicy4, lblPolicy5);
        flxChangePassword.add(imgLock, lblOldPassword, txtOldPassword, lblNewPassword, txtNewPassword, lblConfirmPassword, txtConfirmPassword, lblChangePwdNotification, btnSave, btnCancel, flxPasswordPolicy);
        tabChangePwd.add(flxChangePassword);
        tabSelfService.addTab("tabChangePwd", "Change Password", null, tabChangePwd, null);
        var tabRegisterDevice = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "100%",
            "id": "tabRegisterDevice",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "orientation": constants.BOX_LAYOUT_VERTICAL,
            "skin": "CopyCopyslTab1",
            "tabName": "Register Device",
            "width": "100%"
        }, controller.args[0], "tabRegisterDevice"), extendConfig({
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tabRegisterDevice"), extendConfig({}, controller.args[2], "tabRegisterDevice"));
        tabRegisterDevice.setDefaultUnit(kony.flex.DP);
        var flxRegisterDevice0 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "85%",
            "id": "flxRegisterDevice0",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0c0b1aed6bae145",
            "top": "2%",
            "width": "90%"
        }, controller.args[0], "flxRegisterDevice0"), extendConfig({}, controller.args[1], "flxRegisterDevice0"), extendConfig({}, controller.args[2], "flxRegisterDevice0"));
        flxRegisterDevice0.setDefaultUnit(kony.flex.DP);
        var lblRegister = new kony.ui.Label(extendConfig({
            "id": "lblRegister",
            "isVisible": true,
            "left": "4%",
            "skin": "CopyCopysknHIDNotification3",
            "text": "Do you want to register a new HID Approve Device?",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRegister"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRegister"), extendConfig({}, controller.args[2], "lblRegister"));
        var btnRegisterDevice = new kony.ui.Button(extendConfig({
            "focusSkin": "defBtnFocus",
            "height": "15%",
            "id": "btnRegisterDevice",
            "isVisible": true,
            "left": "15%",
            "onClick": controller.AS_Button_df0c0294252440e4b93f76f19775a863,
            "skin": "CopysknButton2",
            "text": "Register Approve Device",
            "top": "30%",
            "width": "20%"
        }, controller.args[0], "btnRegisterDevice"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRegisterDevice"), extendConfig({}, controller.args[2], "btnRegisterDevice"));
        flxRegisterDevice0.add(lblRegister, btnRegisterDevice);
        var flxRegisterDevice1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "85%",
            "id": "flxRegisterDevice1",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0dc287c2b1e664a",
            "top": "2%",
            "width": "90%"
        }, controller.args[0], "flxRegisterDevice1"), extendConfig({}, controller.args[1], "flxRegisterDevice1"), extendConfig({}, controller.args[2], "flxRegisterDevice1"));
        flxRegisterDevice1.setDefaultUnit(kony.flex.DP);
        var lblQrCode = new kony.ui.Label(extendConfig({
            "id": "lblQrCode",
            "isVisible": true,
            "left": "4%",
            "skin": "CopyCopysknHIDNotification2",
            "text": "Activate using QR code",
            "textStyle": {},
            "top": "2%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblQrCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblQrCode"), extendConfig({}, controller.args[2], "lblQrCode"));
        var flxQrCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "85%",
            "id": "flxQrCode",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10%",
            "width": "30%"
        }, controller.args[0], "flxQrCode"), extendConfig({}, controller.args[1], "flxQrCode"), extendConfig({}, controller.args[2], "flxQrCode"));
        flxQrCode.setDefaultUnit(kony.flex.DP);
        var qrcodegenerator = new com.konymp.qrcodegeneratorCopy(extendConfig({
            "height": "100%",
            "id": "qrcodegenerator",
            "isVisible": true,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "qrcodegeneratorCopy": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "qrcodegenerator"), extendConfig({
            "overrides": {}
        }, controller.args[1], "qrcodegenerator"), extendConfig({
            "overrides": {}
        }, controller.args[2], "qrcodegenerator"));
        qrcodegenerator.dataToEncode = "kony";
        qrcodegenerator.colorLight = "#ffffff";
        qrcodegenerator.colorDark = "#00539b";
        qrcodegenerator.qrcodeWidth = "130";
        qrcodegenerator.qrcodeHeight = "130";
        qrcodegenerator.correctLevel = "Level M";
        flxQrCode.add(qrcodegenerator);
        var lblManually = new kony.ui.Label(extendConfig({
            "id": "lblManually",
            "isVisible": true,
            "left": "45%",
            "skin": "CopyCopysknHIDNotification2",
            "text": "Activate Manually",
            "textStyle": {},
            "top": "2%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblManually"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblManually"), extendConfig({}, controller.args[2], "lblManually"));
        var flxManual = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60%",
            "id": "flxManual",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "45%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15%",
            "width": "50%"
        }, controller.args[0], "flxManual"), extendConfig({}, controller.args[1], "flxManual"), extendConfig({}, controller.args[2], "flxManual"));
        flxManual.setDefaultUnit(kony.flex.DP);
        var lblUserId = new kony.ui.Label(extendConfig({
            "height": "14%",
            "id": "lblUserId",
            "isVisible": true,
            "left": "2%",
            "skin": "CopyCopydefLabel0gfe65ff623304f",
            "text": "User ID",
            "textStyle": {},
            "top": "10%",
            "width": "25%",
            "zIndex": 2
        }, controller.args[0], "lblUserId"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserId"), extendConfig({}, controller.args[2], "lblUserId"));
        var txtUserIdValue = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "defTextBoxFocus",
            "height": "14%",
            "id": "txtUserIdValue",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "29%",
            "secureTextEntry": false,
            "skin": "CopydefTextBoxNormal4",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "10%",
            "width": "60%"
        }, controller.args[0], "txtUserIdValue"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtUserIdValue"), extendConfig({
            "autoCorrect": false
        }, controller.args[2], "txtUserIdValue"));
        var lblInviteCode = new kony.ui.Label(extendConfig({
            "height": "14%",
            "id": "lblInviteCode",
            "isVisible": true,
            "left": "2%",
            "skin": "CopyCopydefLabel0gfe65ff623304f",
            "text": "Invite Code",
            "textStyle": {},
            "top": "32%",
            "width": "25%",
            "zIndex": 4
        }, controller.args[0], "lblInviteCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblInviteCode"), extendConfig({}, controller.args[2], "lblInviteCode"));
        var txtInviteCodeValue = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "defTextBoxFocus",
            "height": "14%",
            "id": "txtInviteCodeValue",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "29%",
            "secureTextEntry": false,
            "skin": "CopydefTextBoxNormal4",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "32%",
            "width": "60%"
        }, controller.args[0], "txtInviteCodeValue"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtInviteCodeValue"), extendConfig({
            "autoCorrect": false
        }, controller.args[2], "txtInviteCodeValue"));
        var lblServiceUrl = new kony.ui.Label(extendConfig({
            "height": "14%",
            "id": "lblServiceUrl",
            "isVisible": true,
            "left": "2%",
            "skin": "CopyCopydefLabel0gfe65ff623304f",
            "text": "Service URL",
            "textStyle": {},
            "top": "54%",
            "width": "25%",
            "zIndex": 4
        }, controller.args[0], "lblServiceUrl"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblServiceUrl"), extendConfig({}, controller.args[2], "lblServiceUrl"));
        var txtServiceUrlValue = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "defTextBoxFocus",
            "height": "14%",
            "id": "txtServiceUrlValue",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "29%",
            "secureTextEntry": false,
            "skin": "CopydefTextBoxNormal0afad41ff365f4c",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "54%",
            "width": "60%"
        }, controller.args[0], "txtServiceUrlValue"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtServiceUrlValue"), extendConfig({
            "autoCorrect": false
        }, controller.args[2], "txtServiceUrlValue"));
        flxManual.add(lblUserId, txtUserIdValue, lblInviteCode, txtInviteCodeValue, lblServiceUrl, txtServiceUrlValue);
        var btnDone = new kony.ui.Button(extendConfig({
            "focusSkin": "defBtnFocus",
            "height": "15%",
            "id": "btnDone",
            "isVisible": true,
            "left": "45%",
            "onClick": controller.AS_Button_fbc7b2d962114cc8bacf9a2c02b47193,
            "skin": "CopysknButton2",
            "text": "Done",
            "top": "75%",
            "width": "12%"
        }, controller.args[0], "btnDone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDone"), extendConfig({}, controller.args[2], "btnDone"));
        flxRegisterDevice1.add(lblQrCode, flxQrCode, lblManually, flxManual, btnDone);
        tabRegisterDevice.add(flxRegisterDevice0, flxRegisterDevice1);
        tabSelfService.addTab("tabRegisterDevice", "Register Device", null, tabRegisterDevice, null);
        flxDevices.add(lblRegisteredDevices, flxManageDevices, tabSelfService);
        userManagement.add(flxDevices);
        return userManagement;
    }
})