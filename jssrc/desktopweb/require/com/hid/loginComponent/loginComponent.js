define(function() {
    return function(controller) {
        var loginComponent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "loginComponent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0b19bc41e63b044",
            "top": "0dp",
            "width": "100%",
            "enableHapticFeedback": false,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366]
        }, controller.args[0], "loginComponent"), extendConfig({}, controller.args[1], "loginComponent"), extendConfig({}, controller.args[2], "loginComponent"));
        loginComponent.setDefaultUnit(kony.flex.DP);
        var flxLogin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxLogin",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLogin"), extendConfig({}, controller.args[1], "flxLogin"), extendConfig({}, controller.args[2], "flxLogin"));
        flxLogin.setDefaultUnit(kony.flex.DP);
        var lblWelcome = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblWelcome",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopylblWelcome",
            "text": "Welcome!",
            "top": "10%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblWelcome"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWelcome"), extendConfig({}, controller.args[2], "lblWelcome"));
        var lblSigntoAcc = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSigntoAcc",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopyCopyCopydefLabel0a3312f0206d545",
            "text": "Login to your account",
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSigntoAcc"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSigntoAcc"), extendConfig({}, controller.args[2], "lblSigntoAcc"));
        var flxUserName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8.50%",
            "id": "flxUserName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox4",
            "top": "6%",
            "width": "55%",
            "zIndex": 1
        }, controller.args[0], "flxUserName"), extendConfig({}, controller.args[1], "flxUserName"), extendConfig({}, controller.args[2], "flxUserName"));
        flxUserName.setDefaultUnit(kony.flex.DP);
        var User = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "User",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyCopyslFontAwesomeIcon1",
            "text": "",
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "User"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "User"), extendConfig({}, controller.args[2], "User"));
        var tbxUser = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "100%",
            "id": "tbxUser",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "placeholder": "Username",
            "secureTextEntry": false,
            "skin": "CopytbxPassword0b0902884d4db41",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "tbxUser"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxUser"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopytbxPassword0b9d697f8229449"
        }, controller.args[2], "tbxUser"));
        flxUserName.add(User, tbxUser);
        var flxPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8.50%",
            "id": "flxPassword",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox0aabc5bc11ce244",
            "top": "3%",
            "width": "55%",
            "zIndex": 1
        }, controller.args[0], "flxPassword"), extendConfig({}, controller.args[1], "flxPassword"), extendConfig({}, controller.args[2], "flxPassword"));
        flxPassword.setDefaultUnit(kony.flex.DP);
        var Lock = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "Lock",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyCopyCopyCopyslFontAwesomeIcon",
            "text": "",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "Lock"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Lock"), extendConfig({}, controller.args[2], "Lock"));
        var tbxPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "100%",
            "id": "tbxPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "placeholder": "Password",
            "secureTextEntry": true,
            "skin": "CopyCopyCopytbxPassword4",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "tbxPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxPassword"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopytbxPassword4"
        }, controller.args[2], "tbxPassword"));
        flxPassword.add(Lock, tbxPassword);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8%",
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox0e5f8e8c2eb4f44",
            "top": "3%",
            "width": "55%",
            "zIndex": 1
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnLogin = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "CopyCopybtnWHiteFocus0ced80b1c6ac841",
            "height": "100%",
            "id": "btnLogin",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_h9a5cb1ce3bf4a1cbf33da5fdfc14ac4,
            "skin": "CopysknButton3",
            "text": "LOGIN",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogin"), extendConfig({}, controller.args[2], "btnLogin"));
        flxButtons.add(btnLogin);
        var lblErrorLogin = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "15%",
            "id": "lblErrorLogin",
            "isVisible": true,
            "left": "25dp",
            "skin": "CopysknHIDError3",
            "text": "Label",
            "top": "10dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblErrorLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorLogin"), extendConfig({}, controller.args[2], "lblErrorLogin"));
        flxLogin.add(lblWelcome, lblSigntoAcc, flxUserName, flxPassword, flxButtons, lblErrorLogin);
        var flxOTP = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxOTP",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOTP"), extendConfig({}, controller.args[1], "flxOTP"), extendConfig({}, controller.args[2], "flxOTP"));
        flxOTP.setDefaultUnit(kony.flex.DP);
        var lblWelcome6 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblWelcome6",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopylblWelcome",
            "text": "HID Approve Secure Code",
            "top": "10%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblWelcome6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWelcome6"), extendConfig({}, controller.args[2], "lblWelcome6"));
        var lblOTPdummy = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "10%",
            "id": "lblOTPdummy",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopyCopyCopydefLabel0a3312f0206d545",
            "text": "Please enter your One-Time Password",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblOTPdummy"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOTPdummy"), extendConfig({}, controller.args[2], "lblOTPdummy"));
        var tbxOTP = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "height": "12%",
            "id": "tbxOTP",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "placeholder": "Enter OTP",
            "secureTextEntry": false,
            "skin": "CopyCopyCopydefTextBoxNormal",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "5%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxOTP"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxOTP"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopydefTextBoxNormal0e2ca2b48dab048"
        }, controller.args[2], "tbxOTP"));
        var lblErrorOTP = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "15%",
            "id": "lblErrorOTP",
            "isVisible": true,
            "left": "25dp",
            "skin": "CopysknHIDError3",
            "text": "invalid OTP entered \n Please enter valid OTP",
            "top": "2%",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "lblErrorOTP"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorOTP"), extendConfig({}, controller.args[2], "lblErrorOTP"));
        var flxOTPButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10%",
            "id": "flxOTPButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0d803e16dd74e47",
            "top": "2%",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxOTPButtons"), extendConfig({}, controller.args[1], "flxOTPButtons"), extendConfig({}, controller.args[2], "flxOTPButtons"));
        flxOTPButtons.setDefaultUnit(kony.flex.DP);
        var btnConfirmOTP = new kony.ui.Button(extendConfig({
            "focusSkin": "CopybtnWHiteFocus0iab105ea2cbd4b",
            "height": "100%",
            "id": "btnConfirmOTP",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_c3f0065bccf94e0c91298e9f6485b3b0,
            "skin": "CopysknButton3",
            "text": "Confirm",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnConfirmOTP"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnConfirmOTP"), extendConfig({}, controller.args[2], "btnConfirmOTP"));
        var btnCancelOTP = new kony.ui.Button(extendConfig({
            "focusSkin": "CopybtnBlueFocus4",
            "height": "100%",
            "id": "btnCancelOTP",
            "isVisible": true,
            "left": "4%",
            "onClick": controller.AS_Button_ffe0ec05544948ef91a32ecc076d045c,
            "skin": "CopysknCancelButton3",
            "text": "Cancel",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnCancelOTP"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancelOTP"), extendConfig({}, controller.args[2], "btnCancelOTP"));
        flxOTPButtons.add(btnConfirmOTP, btnCancelOTP);
        flxOTP.add(lblWelcome6, lblOTPdummy, tbxOTP, lblErrorOTP, flxOTPButtons);
        var flxOTPError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxOTPError",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOTPError"), extendConfig({}, controller.args[1], "flxOTPError"), extendConfig({}, controller.args[2], "flxOTPError"));
        flxOTPError.setDefaultUnit(kony.flex.DP);
        var lblWelcome7 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblWelcome7",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopylblWelcome",
            "text": "HID Secure Code",
            "top": "10%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblWelcome7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWelcome7"), extendConfig({}, controller.args[2], "lblWelcome7"));
        var lblSendOtpError = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "15%",
            "id": "lblSendOtpError",
            "isVisible": true,
            "left": "25dp",
            "skin": "CopysknHIDError3",
            "text": "Failed to send OTP on Registered Device. \n Please retry to send OTP.",
            "top": "15%",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "lblSendOtpError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSendOtpError"), extendConfig({}, controller.args[2], "lblSendOtpError"));
        var flxOTPErrorButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10%",
            "id": "flxOTPErrorButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox0d803e16dd74e47",
            "top": "10%",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxOTPErrorButtons"), extendConfig({}, controller.args[1], "flxOTPErrorButtons"), extendConfig({}, controller.args[2], "flxOTPErrorButtons"));
        flxOTPErrorButtons.setDefaultUnit(kony.flex.DP);
        var btnSendOTP = new kony.ui.Button(extendConfig({
            "focusSkin": "CopybtnWHiteFocus0iab105ea2cbd4b",
            "height": "100%",
            "id": "btnSendOTP",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_c055f0ea0eaa4c9ea917ed52a1c93130,
            "skin": "CopysknButton3",
            "text": "Send OTP",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnSendOTP"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSendOTP"), extendConfig({}, controller.args[2], "btnSendOTP"));
        var btnCancelSendOTP = new kony.ui.Button(extendConfig({
            "focusSkin": "CopybtnBlueFocus4",
            "height": "100%",
            "id": "btnCancelSendOTP",
            "isVisible": true,
            "left": "4%",
            "onClick": controller.AS_Button_h9e3e1daad9c491b8fa9ef0359929a4d,
            "skin": "CopysknCancelButton3",
            "text": "Cancel",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnCancelSendOTP"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancelSendOTP"), extendConfig({}, controller.args[2], "btnCancelSendOTP"));
        flxOTPErrorButtons.add(btnSendOTP, btnCancelSendOTP);
        flxOTPError.add(lblWelcome7, lblSendOtpError, flxOTPErrorButtons);
        var flxPushDevices = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "101.11%",
            "id": "flxPushDevices",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100.00%",
            "zIndex": 1
        }, controller.args[0], "flxPushDevices"), extendConfig({}, controller.args[1], "flxPushDevices"), extendConfig({}, controller.args[2], "flxPushDevices"));
        flxPushDevices.setDefaultUnit(kony.flex.DP);
        var lblWelcome5 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblWelcome5",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopyCopyCopydefLabel0a641bbe8ec9140",
            "text": "HID Approve Notification",
            "top": "10%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblWelcome5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWelcome5"), extendConfig({}, controller.args[2], "lblWelcome5"));
        var lblSelectPushDevice = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSelectPushDevice",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopysknHIDNotification3",
            "text": "Please select one of the following device to send Push notification",
            "top": "18%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSelectPushDevice"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelectPushDevice"), extendConfig({}, controller.args[2], "lblSelectPushDevice"));
        var segmentPushDevices = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "data": [{
                "lblDeviceName": "PushDevice1"
            }, {
                "lblDeviceName": "PushDevice2"
            }],
            "groupCells": false,
            "height": "30%",
            "id": "segmentPushDevices",
            "isVisible": true,
            "left": "0",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_b665927de68c4985b4b97a4f0a939bfc,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "Copyseg0j4a26ea8f9c64c",
            "rowTemplate": "CopyflxSegPushDevices",
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 2,
            "showScrollbars": false,
            "top": "2%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxSegPushDevices": "flxSegPushDevices",
                "lblDeviceName": "lblDeviceName"
            },
            "width": "50%"
        }, controller.args[0], "segmentPushDevices"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segmentPushDevices"), extendConfig({}, controller.args[2], "segmentPushDevices"));
        var flxPushApproveBtn = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10%",
            "id": "flxPushApproveBtn",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox0a689502c07554c",
            "top": "3%",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxPushApproveBtn"), extendConfig({}, controller.args[1], "flxPushApproveBtn"), extendConfig({}, controller.args[2], "flxPushApproveBtn"));
        flxPushApproveBtn.setDefaultUnit(kony.flex.DP);
        var btnSecureCode = new kony.ui.Button(extendConfig({
            "focusSkin": "CopyCopybtnWHiteFocus0cc5f738c688e43",
            "height": "100%",
            "id": "btnSecureCode",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_b0ebddf304d6460b905404d6b496e0df,
            "skin": "CopysknButton3",
            "text": "Try Secure Code",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnSecureCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSecureCode"), extendConfig({}, controller.args[2], "btnSecureCode"));
        var btnCancelPush = new kony.ui.Button(extendConfig({
            "focusSkin": "CopyCopybtnBlueFocus0eccabb014eb449",
            "height": "100%",
            "id": "btnCancelPush",
            "isVisible": true,
            "left": "4%",
            "onClick": controller.AS_Button_i594f2e364034e6591171be6255642d7,
            "skin": "CopysknCancelButton3",
            "text": "Cancel",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnCancelPush"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancelPush"), extendConfig({}, controller.args[2], "btnCancelPush"));
        flxPushApproveBtn.add(btnSecureCode, btnCancelPush);
        flxPushDevices.add(lblWelcome5, lblSelectPushDevice, segmentPushDevices, flxPushApproveBtn);
        var flxApprove = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "101.11%",
            "id": "flxApprove",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100.00%",
            "zIndex": 1
        }, controller.args[0], "flxApprove"), extendConfig({}, controller.args[1], "flxApprove"), extendConfig({}, controller.args[2], "flxApprove"));
        flxApprove.setDefaultUnit(kony.flex.DP);
        var lblWelcome4 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblWelcome4",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopylblWelcome",
            "text": "HID Approve Notification",
            "top": "10%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblWelcome4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWelcome4"), extendConfig({}, controller.args[2], "lblWelcome4"));
        var lblApproveNot = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblApproveNot",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopysknHIDNotification3",
            "text": "We've sent a notification to your device. Approve the notification to continue.",
            "top": "18%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblApproveNot"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblApproveNot"), extendConfig({}, controller.args[2], "lblApproveNot"));
        var flxTimer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "12%",
            "id": "flxTimer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox0a689502c07554c",
            "top": "3%",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxTimer"), extendConfig({}, controller.args[1], "flxTimer"), extendConfig({}, controller.args[2], "flxTimer"));
        flxTimer.setDefaultUnit(kony.flex.DP);
        var lblResendNot = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblResendNot",
            "isVisible": true,
            "left": "4%",
            "onTouchEnd": controller.AS_Label_fb87b28254404c7d89891f35a2ef3df7,
            "skin": "CopysknHIDNotification3",
            "text": "Resend",
            "top": "2dp",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblResendNot"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblResendNot"), extendConfig({}, controller.args[2], "lblResendNot"));
        var lblTimerNot = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTimerNot",
            "isVisible": true,
            "left": "45%",
            "skin": "CopysknHIDNotification3",
            "top": "2dp",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "lblTimerNot"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTimerNot"), extendConfig({}, controller.args[2], "lblTimerNot"));
        flxTimer.add(lblResendNot, lblTimerNot);
        var flxApproveBtns = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10%",
            "id": "flxApproveBtns",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox0a689502c07554c",
            "top": "7%",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxApproveBtns"), extendConfig({}, controller.args[1], "flxApproveBtns"), extendConfig({}, controller.args[2], "flxApproveBtns"));
        flxApproveBtns.setDefaultUnit(kony.flex.DP);
        var btnTryOTP = new kony.ui.Button(extendConfig({
            "focusSkin": "CopyCopybtnWHiteFocus0cc5f738c688e43",
            "height": "100%",
            "id": "btnTryOTP",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_f5c1e87f46f341d1807d9a5f75939001,
            "skin": "CopysknButton3",
            "text": "Try Secure Code",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnTryOTP"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTryOTP"), extendConfig({}, controller.args[2], "btnTryOTP"));
        var btnCancelApprove = new kony.ui.Button(extendConfig({
            "focusSkin": "CopyCopybtnBlueFocus0eccabb014eb449",
            "height": "100%",
            "id": "btnCancelApprove",
            "isVisible": true,
            "left": "4%",
            "onClick": controller.AS_Button_f81a7a839abc4b228e68d33a1cd170b7,
            "skin": "CopysknCancelButton3",
            "text": "Cancel",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnCancelApprove"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancelApprove"), extendConfig({}, controller.args[2], "btnCancelApprove"));
        flxApproveBtns.add(btnTryOTP, btnCancelApprove);
        var lblErrorApprove = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "12%",
            "id": "lblErrorApprove",
            "isVisible": true,
            "left": "25dp",
            "skin": "CopysknHIDError3",
            "text": "Label",
            "top": "2%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblErrorApprove"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorApprove"), extendConfig({}, controller.args[2], "lblErrorApprove"));
        flxApprove.add(lblWelcome4, lblApproveNot, flxTimer, flxApproveBtns, lblErrorApprove);
        loginComponent.add(flxLogin, flxOTP, flxOTPError, flxPushDevices, flxApprove);
        loginComponent.breakpointResetData = {};
        loginComponent.breakpointData = {
            maxBreakpointWidth: 1366,
        }
        return loginComponent;
    }
})