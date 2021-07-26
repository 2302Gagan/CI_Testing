define("frmAuthentication", function() {
    return function(controller) {
        function addWidgetsfrmAuthentication() {
            this.setDefaultUnit(kony.flex.DP);
            var imgBg = new kony.ui.Image2({
                "height": "100%",
                "id": "imgBg",
                "isVisible": true,
                "left": "1dp",
                "skin": "slImage",
                "src": "fronteledawn02_1.jpg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "blur": {
                    "enabled": false,
                    "value": 3
                }
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "65%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "373dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0c46500d93c704a",
                "top": "117dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxImg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxImg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "isModalContainer": false,
                "skin": "CopysknHIDTransparentBlue",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxImg.setDefaultUnit(kony.flex.DP);
            var siderLogin = new kony.ui.Image2({
                "height": "100%",
                "id": "siderLogin",
                "isVisible": false,
                "left": "0dp",
                "skin": "slImage",
                "src": "placeholder3.jpg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var siderRegistrationSuccess = new kony.ui.Image2({
                "height": "100%",
                "id": "siderRegistrationSuccess",
                "isVisible": false,
                "left": "0dp",
                "skin": "slImage",
                "src": "placeholder3.jpg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var siderApprove = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "siderApprove",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "32dp",
                "isModalContainer": false,
                "skin": "CopysknHIDmerge",
                "top": "31dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            siderApprove.setDefaultUnit(kony.flex.DP);
            var imgAprroveDeny = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "imgAprroveDeny",
                "isVisible": true,
                "left": "45dp",
                "skin": "slImage",
                "src": "approvenew.png",
                "top": "75dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            siderApprove.add(imgAprroveDeny);
            var siderOTP = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "siderOTP",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknHIDmerge",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            siderOTP.setDefaultUnit(kony.flex.DP);
            var imgOTP = new kony.ui.Image2({
                "height": "150dp",
                "id": "imgOTP",
                "isVisible": false,
                "left": "45dp",
                "skin": "slImage",
                "src": "otpimg.png",
                "top": "75dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxWrongAttemps = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxWrongAttemps",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWrongAttemps.setDefaultUnit(kony.flex.DP);
            var flxAttempts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "20%",
                "id": "flxAttempts",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "34dp",
                "isModalContainer": false,
                "skin": "CopylblRoundWhiteeqqerewr",
                "top": "192dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxAttempts.setDefaultUnit(kony.flex.DP);
            var lblAttmt1 = new kony.ui.Label({
                "centerY": "50%",
                "height": "40dp",
                "id": "lblAttmt1",
                "isVisible": true,
                "left": "15%",
                "skin": "CopylblRoundRed",
                "text": "1",
                "top": "26dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAttmt2 = new kony.ui.Label({
                "centerY": "50%",
                "height": "40dp",
                "id": "lblAttmt2",
                "isVisible": true,
                "left": "10%",
                "skin": "CopylblRoundWhite",
                "text": "2",
                "top": "36dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAttmt3 = new kony.ui.Label({
                "centerY": "50%",
                "height": "40dp",
                "id": "lblAttmt3",
                "isVisible": true,
                "left": "10%",
                "skin": "CopylblRoundWhite",
                "text": "3",
                "top": "36dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAttempts.add(lblAttmt1, lblAttmt2, lblAttmt3);
            var lblCounter = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "150dp",
                "id": "lblCounter",
                "isVisible": false,
                "left": "93dp",
                "skin": "sknRounded1",
                "text": "3",
                "top": "284dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWrongAttemps.add(flxAttempts, lblCounter);
            siderOTP.add(imgOTP, flxWrongAttemps);
            var siderOTPFail = new kony.ui.Image2({
                "height": "100%",
                "id": "siderOTPFail",
                "isVisible": false,
                "left": "0dp",
                "skin": "slImage",
                "src": "failedfunny.jpg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var siderMFA = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "siderMFA",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknHIDmerge",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            siderMFA.setDefaultUnit(kony.flex.DP);
            var imgMFA = new kony.ui.Image2({
                "height": "150dp",
                "id": "imgMFA",
                "isVisible": true,
                "left": "45dp",
                "skin": "slImage",
                "src": "approveph1_1.png",
                "top": "75dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            siderMFA.add(imgMFA);
            flxImg.add(siderLogin, siderRegistrationSuccess, siderApprove, siderOTP, siderOTPFail, siderMFA);
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var imgHID = new kony.ui.Image2({
                "height": "10%",
                "id": "imgHID",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "hid_1.png",
                "top": "5%",
                "width": "70.00%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxApprove = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "70%",
                "id": "flxApprove",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "121dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "177dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxApprove.setDefaultUnit(kony.flex.DP);
            var lblWelcome4 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblWelcome4",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopyCopydefLabel0d3feb886a05b48",
                "text": "HID Approve Notification",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblApproveNot = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblApproveNot",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopyCopydefLabel0f63fd713ff5445",
                "text": "We've sent a notification to your device. Approve the notification to continue.",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxTimer = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxTimer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a2d26e04f42846",
                "top": "7%",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxTimer.setDefaultUnit(kony.flex.DP);
            var lblResendNot = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblResendNot",
                "isVisible": true,
                "left": "4%",
                "skin": "CopyCopydefLabel0f63fd713ff5445",
                "text": "Resend",
                "top": "2dp",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTimerNot = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTimerNot",
                "isVisible": true,
                "left": "10%",
                "skin": "CopyCopydefLabel0f63fd713ff5445",
                "top": "2dp",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTimer.add(lblResendNot, lblTimerNot);
            var flxApproveBtns = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxApproveBtns",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a2d26e04f42846",
                "top": "7%",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxApproveBtns.setDefaultUnit(kony.flex.DP);
            var btnCancelApprove = new kony.ui.Button({
                "focusSkin": "CopybtnBlueFocus3",
                "height": "100%",
                "id": "btnCancelApprove",
                "isVisible": false,
                "left": "0%",
                "skin": "CopyCopybtnWHiteFocus4",
                "text": "SIGN UP",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnTryOTP = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "CopybtnWHiteFocus5",
                "height": "100%",
                "id": "btnTryOTP",
                "isVisible": true,
                "left": "0%",
                "skin": "CopybtnBlueFocus0j665af29992648",
                "text": "Try Other Factor",
                "top": "0%",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxApproveBtns.add(btnCancelApprove, btnTryOTP);
            var lblErrorApprove = new kony.ui.Label({
                "height": "15%",
                "id": "lblErrorApprove",
                "isVisible": true,
                "left": "25dp",
                "skin": "CopyCopyCopydefLabel4",
                "text": "Label",
                "top": "5%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxApprove.add(lblWelcome4, lblApproveNot, flxTimer, flxApproveBtns, lblErrorApprove);
            var flxOTP = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "70%",
                "id": "flxOTP",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "121dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "177dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxOTP.setDefaultUnit(kony.flex.DP);
            var lblWelcome6 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblWelcome6",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopyCopydefLabel0d3feb886a05b48",
                "text": "HID Approve Secure Code",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOTPdummy = new kony.ui.Label({
                "centerX": "50%",
                "height": "20%",
                "id": "lblOTPdummy",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopyCopydefLabel0f63fd713ff5445",
                "text": "Please enter your One-Time Password",
                "top": "5%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var tbxOTP = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "15%",
                "id": "tbxOTP",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "secureTextEntry": false,
                "skin": "CopyCopydefTextBoxNormal3",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "5%",
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false
            });
            var lblErrorOTP = new kony.ui.Label({
                "id": "lblErrorOTP",
                "isVisible": true,
                "left": "25dp",
                "skin": "CopyCopydefLabel0d13e46978cd449",
                "text": "invalid OTP entered \n You have 3 attempts before account is blocked",
                "top": "3%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxOTPButtons = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxOTPButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a2d26e04f42846",
                "top": "10%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxOTPButtons.setDefaultUnit(kony.flex.DP);
            var btnConfirmOTP = new kony.ui.Button({
                "focusSkin": "CopybtnWHiteFocus5",
                "height": "100%",
                "id": "btnConfirmOTP",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopybtnBlueFocus4",
                "text": "Confirm",
                "top": "0%",
                "width": "48%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancelOTP = new kony.ui.Button({
                "focusSkin": "CopybtnBlueFocus3",
                "height": "100%",
                "id": "btnCancelOTP",
                "isVisible": true,
                "left": "4%",
                "skin": "CopyCopybtnWHiteFocus4",
                "text": "SIGN UP",
                "top": "0%",
                "width": "48%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOTPButtons.add(btnConfirmOTP, btnCancelOTP);
            flxOTP.add(lblWelcome6, lblOTPdummy, tbxOTP, lblErrorOTP, flxOTPButtons);
            var flxOTPFail = new kony.ui.FlexContainer({
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxOTPFail",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "80dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "135dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOTPFail.setDefaultUnit(kony.flex.DP);
            var lblWelcome8 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblWelcome8",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopyCopydefLabel0d3feb886a05b48",
                "text": "Authentication Failed",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAlert = new kony.ui.Label({
                "centerX": "50%",
                "height": "26%",
                "id": "lblAlert",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopyCopydefLabel0f63fd713ff5445",
                "text": "Access to Internet banking has been disabled",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblErrorOTPFail = new kony.ui.Label({
                "id": "lblErrorOTPFail",
                "isVisible": true,
                "left": "25dp",
                "skin": "CopyCopydefLabel0d13e46978cd449",
                "text": "Account blocked please contact customer care.",
                "top": "3%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxOTPFailBtns = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxOTPFailBtns",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a2d26e04f42846",
                "top": "25dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxOTPFailBtns.setDefaultUnit(kony.flex.DP);
            var btnContactSuprt = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "CopybtnWHiteFocus5",
                "height": "100%",
                "id": "btnContactSuprt",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopybtnBlueFocus4",
                "text": "Contact Support",
                "top": "0%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOTPFailBtns.add(btnContactSuprt);
            flxOTPFail.add(lblWelcome8, lblAlert, lblErrorOTPFail, flxOTPFailBtns);
            var flxMFA = new kony.ui.FlexContainer({
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxMFA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "80dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "135dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMFA.setDefaultUnit(kony.flex.DP);
            var lblWelcome9 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblWelcome9",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopyCopydefLabel0d3feb886a05b48",
                "text": "Second Factor Authentication",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSelectMFA = new kony.ui.Label({
                "centerX": "50%",
                "height": "12%",
                "id": "lblSelectMFA",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopyCopydefLabel0f338ef680cfe41",
                "text": "Click on the choice of your Second Factor Authentication",
                "top": "10%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxMFAOpts = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxMFAOpts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "17dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxMFAOpts.setDefaultUnit(kony.flex.DP);
            var imgApprove = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgApprove",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "approveicon_3.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "toolTip": "Approve"
            });
            var imgSecure = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgSecure",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "imgsc_2.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "toolTip": "Secure Code"
            });
            var imgSMS = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgSMS",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "smsotpicon_3.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "toolTip": "SMS OTP"
            });
            var imgEmail = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgEmail",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "emailotpicon_3.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "toolTip": "Email OTP"
            });
            var imgHW = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgHW",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "imgpwdf_2.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "toolTip": "HardWare OTP"
            });
            var imgPassword = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgPassword",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "passwordicon.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "toolTip": "Password"
            });
            flxMFAOpts.add(imgApprove, imgSecure, imgSMS, imgEmail, imgHW, imgPassword);
            var lblMFAOptions = new kony.ui.Label({
                "centerX": "50%",
                "height": "18%",
                "id": "lblMFAOptions",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopyCopydefLabel0id59f2ca91e241",
                "text": "On Selecting Approve the Notification will be sent to the Approve app for Authorization",
                "top": "3%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var buttonsMFA = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "buttonsMFA",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0a2d26e04f42846",
                "top": "4%",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            buttonsMFA.setDefaultUnit(kony.flex.DP);
            var btnContMFA = new kony.ui.Button({
                "focusSkin": "CopybtnWHiteFocus5",
                "height": "100%",
                "id": "btnContMFA",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopybtnBlueFocus4",
                "text": "LOGIN",
                "top": "0%",
                "width": "48%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancelMFA = new kony.ui.Button({
                "focusSkin": "CopybtnBlueFocus3",
                "height": "100%",
                "id": "btnCancelMFA",
                "isVisible": true,
                "left": "4%",
                "skin": "CopyCopybtnWHiteFocus4",
                "text": "SIGN UP",
                "top": "0%",
                "width": "48%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            buttonsMFA.add(btnContMFA, btnCancelMFA);
            flxMFA.add(lblWelcome9, lblSelectMFA, flxMFAOpts, lblMFAOptions, buttonsMFA);
            var flxLogin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "70%",
                "id": "flxLogin",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "53dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "215dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxLogin.setDefaultUnit(kony.flex.DP);
            var lblWelcome = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblWelcome",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopyCopylblErrortext1",
                "text": "Welcome!",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSigntoAcc = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSigntoAcc",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopyCopyCopydefLabel3",
                "text": "Login to your account",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxUserName = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxUserName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "CopyCopyCopyslFbox0a590614f493c4d",
                "top": "6%",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxUserName.setDefaultUnit(kony.flex.DP);
            var User = new kony.ui.Label({
                "id": "User",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopyCopyCopyslFontAwesomeIcon3",
                "text": "",
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var tbxUser = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopyCopyCopytbxPassword2",
                "height": "40dp",
                "id": "tbxUser",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "33dp",
                "placeholder": "User ID",
                "secureTextEntry": false,
                "skin": "CopyCopyCopytbxPassword3",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "9dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            flxUserName.add(User, tbxUser);
            var flxPassword = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxPassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "CopyCopyCopyslFbox0a590614f493c4d",
                "top": "3%",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxPassword.setDefaultUnit(kony.flex.DP);
            var Key = new kony.ui.Label({
                "id": "Key",
                "isVisible": false,
                "left": "10dp",
                "skin": "CopyCopyCopyslFontAwesomeIcon3",
                "text": "",
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Lock = new kony.ui.Label({
                "centerY": "50%",
                "id": "Lock",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopyCopyCopyslFontAwesomeIcon3",
                "text": "",
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var tbxPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopyCopyCopytbxPassword2",
                "height": "40dp",
                "id": "tbxPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "33dp",
                "placeholder": "Password",
                "secureTextEntry": true,
                "skin": "CopyCopyCopytbxPassword1",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "9dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            flxPassword.add(Key, Lock, tbxPassword);
            var flxForgotPassword = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxForgotPassword",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "10%",
                "isModalContainer": false,
                "skin": "CopyCopyCopyslFbox4",
                "top": "1%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxForgotPassword.setDefaultUnit(kony.flex.DP);
            var flxRM = new kony.ui.FlexContainer({
                "clipBounds": false,
                "height": "220dp",
                "id": "flxRM",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "60dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRM.setDefaultUnit(kony.flex.DP);
            var SquareLight = new kony.ui.Label({
                "id": "SquareLight",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopyCopyCopyslFontAwesomeIcon2",
                "text": "",
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CheckSquareLight = new kony.ui.Label({
                "id": "CheckSquareLight",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopyCopyCopyslFontAwesomeIcon2",
                "text": "",
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblRememberMe = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRememberMe",
                "isVisible": true,
                "left": "1%",
                "skin": "CopyCopyCopydefLabel5",
                "text": "Remember Me",
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRM.add(SquareLight, CheckSquareLight, lblRememberMe);
            var flxFuname = new kony.ui.FlexContainer({
                "clipBounds": false,
                "height": "220dp",
                "id": "flxFuname",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "60dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFuname.setDefaultUnit(kony.flex.DP);
            var lblorgotPassword = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblorgotPassword",
                "isVisible": true,
                "left": "13%",
                "skin": "CopyCopyCopydefLabel0c0107005444941",
                "text": "Label",
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFuname.add(lblorgotPassword);
            flxForgotPassword.add(flxRM, flxFuname);
            var flxButtons = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "CopyCopyCopyslFbox4",
                "top": "3%",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnLogin = new kony.ui.Button({
                "focusSkin": "CopyCopybtnWHiteFocus0hc27c16fe91d45",
                "height": "100%",
                "id": "btnLogin",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopyCopybtnBlueFocus1",
                "text": "SUBMIT",
                "top": "0%",
                "width": "48%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSignUp = new kony.ui.Button({
                "focusSkin": "CopyCopybtnBlueFocus5",
                "height": "100%",
                "id": "btnSignUp",
                "isVisible": true,
                "left": "3%",
                "skin": "CopyCopybtnWHiteFocus3",
                "text": "REGISTER",
                "top": "0%",
                "width": "48%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtons.add(btnLogin, btnSignUp);
            var flxChoose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "20%",
                "id": "flxChoose",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3%",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxChoose.setDefaultUnit(kony.flex.DP);
            var lblChoose = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblChoose",
                "isVisible": true,
                "left": "13dp",
                "skin": "CopyCopydefLabel0hb832a1ae7484f",
                "text": "Choose Another Credential",
                "top": "4dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDiffAuth = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "90%",
                "id": "flxDiffAuth",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDiffAuth.setDefaultUnit(kony.flex.DP);
            var icoApprove = new kony.ui.Image2({
                "height": "30dp",
                "id": "icoApprove",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "approveicon_3.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "toolTip": "Approve"
            });
            var icoSecure = new kony.ui.Image2({
                "height": "30dp",
                "id": "icoSecure",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "imgsc_2.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "toolTip": "Secure Code"
            });
            var icoSMS = new kony.ui.Image2({
                "height": "30dp",
                "id": "icoSMS",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "smsotpicon_3.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "toolTip": "SMS OTP"
            });
            var icoEmail = new kony.ui.Image2({
                "height": "30dp",
                "id": "icoEmail",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "emailotpicon_3.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "toolTip": "EMAIL OTP"
            });
            var icoHW = new kony.ui.Image2({
                "height": "30dp",
                "id": "icoHW",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "imgpwdf_2.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "toolTip": "Hardware OTP"
            });
            flxDiffAuth.add(icoApprove, icoSecure, icoSMS, icoEmail, icoHW);
            flxChoose.add(lblChoose, flxDiffAuth);
            var lblConsensus = new kony.ui.Label({
                "id": "lblConsensus",
                "isVisible": true,
                "left": "16dp",
                "skin": "CopyCopyCopydefLabel3",
                "text": "Label",
                "top": "9dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblErrorLogin = new kony.ui.Label({
                "id": "lblErrorLogin",
                "isVisible": true,
                "left": "25dp",
                "skin": "CopyCopyCopydefLabel4",
                "text": "Label",
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLogin.add(lblWelcome, lblSigntoAcc, flxUserName, flxPassword, flxForgotPassword, flxButtons, flxChoose, lblConsensus, lblErrorLogin);
            flxContent.add(imgHID, flxApprove, flxOTP, flxOTPFail, flxMFA, flxLogin);
            flxMain.add(flxImg, flxContent);
            var flxLoading = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoading",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox0da86ffe9af6741",
                "top": "0dp",
                "width": "100%",
                "zIndex": 25
            }, {}, {});
            flxLoading.setDefaultUnit(kony.flex.DP);
            var imgSpinner = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "300dp",
                "id": "imgSpinner",
                "isVisible": true,
                "left": "372dp",
                "skin": "slImage",
                "src": "image_732_1.gif",
                "top": "336dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoading.add(imgSpinner);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1200,
                "1200": {
                    "imgBg": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "isVisible": true,
                        "src": "fronteledawn02_1.jpg",
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "flxImg": {
                        "segmentProps": []
                    },
                    "siderLogin": {
                        "src": "placeholder3.jpg",
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "siderRegistrationSuccess": {
                        "src": "placeholder3.jpg",
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "siderApprove": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "segmentProps": []
                    },
                    "imgAprroveDeny": {
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "segmentProps": []
                    },
                    "siderOTP": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "imgOTP": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "siderMFA": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "imgMFA": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "lblWelcome4": {
                        "height": {
                            "type": "ref",
                            "value": kony.flex.USE_PREFFERED_SIZE
                        },
                        "skin": "CopyCopydefLabel0d3feb886a05b48",
                        "width": {
                            "type": "string",
                            "value": "90%"
                        },
                        "segmentProps": []
                    },
                    "lblApproveNot": {
                        "skin": "CopyCopydefLabel0f63fd713ff5445",
                        "top": {
                            "type": "string",
                            "value": "10%"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        },
                        "segmentProps": []
                    },
                    "flxTimer": {
                        "height": {
                            "type": "string",
                            "value": "10%"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "skin": "CopyCopyslFbox0a2d26e04f42846",
                        "segmentProps": []
                    },
                    "flxApproveBtns": {
                        "height": {
                            "type": "string",
                            "value": "10%"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "skin": "CopyCopyslFbox0a2d26e04f42846",
                        "segmentProps": []
                    },
                    "btnCancelApprove": {
                        "focusSkin": "CopyCopybtnBlueFocus1",
                        "skin": "CopyCopybtnWHiteFocus4",
                        "text": "Cancel",
                        "segmentProps": []
                    },
                    "btnTryOTP": {
                        "focusSkin": "CopyCopybtnWHiteFocus5",
                        "segmentProps": []
                    },
                    "lblErrorApprove": {
                        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "skin": "CopyCopyCopydefLabel4",
                        "text": "",
                        "width": {
                            "type": "string",
                            "value": "80%"
                        },
                        "segmentProps": []
                    },
                    "lblWelcome6": {
                        "height": {
                            "type": "ref",
                            "value": kony.flex.USE_PREFFERED_SIZE
                        },
                        "skin": "CopyCopydefLabel0d3feb886a05b48",
                        "segmentProps": []
                    },
                    "lblOTPdummy": {
                        "skin": "CopyCopydefLabel0f63fd713ff5445",
                        "segmentProps": []
                    },
                    "lblErrorOTP": {
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "skin": "CopyCopydefLabel0d13e46978cd449",
                        "segmentProps": []
                    },
                    "flxOTPButtons": {
                        "height": {
                            "type": "string",
                            "value": "10%"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "skin": "CopyCopyslFbox0a2d26e04f42846",
                        "segmentProps": []
                    },
                    "btnConfirmOTP": {
                        "focusSkin": "CopyCopybtnWHiteFocus5",
                        "segmentProps": []
                    },
                    "btnCancelOTP": {
                        "focusSkin": "CopyCopybtnBlueFocus1",
                        "skin": "CopyCopybtnWHiteFocus4",
                        "text": "Cancel",
                        "segmentProps": []
                    },
                    "flxOTPFail": {
                        "height": {
                            "type": "string",
                            "value": "70%"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "left": {
                            "type": "string",
                            "value": "80dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "135dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        },
                        "segmentProps": []
                    },
                    "lblWelcome8": {
                        "height": {
                            "type": "ref",
                            "value": kony.flex.USE_PREFFERED_SIZE
                        },
                        "skin": "CopyCopydefLabel0d3feb886a05b48",
                        "segmentProps": []
                    },
                    "lblAlert": {
                        "skin": "CopyCopydefLabel0f63fd713ff5445",
                        "width": {
                            "type": "string",
                            "value": "80%"
                        },
                        "segmentProps": []
                    },
                    "lblErrorOTPFail": {
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "skin": "CopyCopydefLabel0d13e46978cd449",
                        "segmentProps": []
                    },
                    "flxOTPFailBtns": {
                        "height": {
                            "type": "string",
                            "value": "10%"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "skin": "CopyCopyslFbox0a2d26e04f42846",
                        "top": {
                            "type": "string",
                            "value": "10%"
                        },
                        "segmentProps": []
                    },
                    "btnContactSuprt": {
                        "focusSkin": "CopyCopybtnWHiteFocus5",
                        "skin": "CopyCopybtnBlueFocus4",
                        "segmentProps": []
                    },
                    "flxMFA": {
                        "height": {
                            "type": "string",
                            "value": "70%"
                        },
                        "layoutType": kony.flex.FLOW_VERTICAL,
                        "left": {
                            "type": "string",
                            "value": "80dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "135dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        },
                        "segmentProps": []
                    },
                    "lblWelcome9": {
                        "height": {
                            "type": "ref",
                            "value": kony.flex.USE_PREFFERED_SIZE
                        },
                        "skin": "CopyCopydefLabel0d3feb886a05b48",
                        "width": {
                            "type": "string",
                            "value": "90%"
                        },
                        "segmentProps": []
                    },
                    "lblSelectMFA": {
                        "segmentProps": []
                    },
                    "flxMFAOpts": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "15%"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "segmentProps": []
                    },
                    "lblMFAOptions": {
                        "segmentProps": []
                    },
                    "buttonsMFA": {
                        "height": {
                            "type": "string",
                            "value": "10%"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "skin": "CopyCopyslFbox0a2d26e04f42846",
                        "segmentProps": []
                    },
                    "btnContMFA": {
                        "focusSkin": "CopyCopybtnWHiteFocus5",
                        "skin": "CopyCopybtnBlueFocus4",
                        "text": "Continue",
                        "segmentProps": []
                    },
                    "btnCancelMFA": {
                        "focusSkin": "CopyCopybtnBlueFocus1",
                        "skin": "CopyCopybtnWHiteFocus4",
                        "text": "Cancel",
                        "segmentProps": []
                    },
                    "flxLogin": {
                        "segmentProps": []
                    },
                    "lblWelcome": {
                        "skin": "CopyCopylblErrortext1",
                        "text": "Welcome!",
                        "segmentProps": []
                    },
                    "lblSigntoAcc": {
                        "segmentProps": []
                    },
                    "flxUserName": {
                        "height": {
                            "type": "string",
                            "value": "10%"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "segmentProps": []
                    },
                    "User": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "isVisible": true,
                        "text": "",
                        "top": {
                            "type": "string",
                            "value": "5%"
                        },
                        "segmentProps": []
                    },
                    "tbxUser": {
                        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                        "focusSkin": "CopyCopyCopytbxPassword3",
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "left": {
                            "type": "string",
                            "value": "1%"
                        },
                        "placeholderSkin": "",
                        "skin": "CopyCopyCopytbxPassword3",
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "segmentProps": []
                    },
                    "flxPassword": {
                        "height": {
                            "type": "string",
                            "value": "10%"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "segmentProps": []
                    },
                    "Key": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "left": {
                            "type": "string",
                            "value": "10dp"
                        },
                        "segmentProps": []
                    },
                    "Lock": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "tbxPassword": {
                        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                        "focusSkin": "CopyCopyCopytbxPassword1",
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "left": {
                            "type": "string",
                            "value": "1%"
                        },
                        "placeholderSkin": "",
                        "skin": "CopyCopyCopytbxPassword1",
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        },
                        "segmentProps": []
                    },
                    "flxForgotPassword": {
                        "height": {
                            "type": "string",
                            "value": "10%"
                        },
                        "skin": "CopyCopyCopyslFbox4",
                        "segmentProps": []
                    },
                    "flxRM": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "height": {
                            "type": "string",
                            "value": "45%"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "50%"
                        },
                        "segmentProps": []
                    },
                    "SquareLight": {
                        "Default": {
                            "contentAlignment": 4
                        },
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                        "height": {
                            "type": "ref",
                            "value": kony.flex.USE_PREFFERED_SIZE
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "skin": "CopyCopyCopyslFontAwesomeIcon2",
                        "top": {
                            "type": "string",
                            "value": "35%"
                        },
                        "width": {
                            "type": "ref",
                            "value": kony.flex.USE_PREFFERED_SIZE
                        },
                        "segmentProps": []
                    },
                    "CheckSquareLight": {
                        "centerY": {
                            "type": "string",
                            "value": "50%"
                        },
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "skin": "CopyCopyCopyslFontAwesomeIcon2",
                        "segmentProps": []
                    },
                    "lblRememberMe": {
                        "left": {
                            "type": "string",
                            "value": "4%"
                        },
                        "skin": "CopyCopyCopydefLabel5",
                        "segmentProps": []
                    },
                    "flxFuname": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "50%"
                        },
                        "segmentProps": []
                    },
                    "lblorgotPassword": {
                        "left": {
                            "type": "string",
                            "value": ""
                        },
                        "right": {
                            "type": "string",
                            "value": "0%"
                        },
                        "skin": "CopyCopyCopydefLabel0c0107005444941",
                        "text": "Forgot Password?",
                        "segmentProps": []
                    },
                    "flxButtons": {
                        "height": {
                            "type": "string",
                            "value": "10%"
                        },
                        "isVisible": true,
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "skin": "CopyCopyCopyslFbox4",
                        "segmentProps": []
                    },
                    "btnLogin": {
                        "focusSkin": "CopyCopyCopybtnWHiteFocus",
                        "skin": "CopyCopyCopybtnBlueFocus1",
                        "segmentProps": []
                    },
                    "btnSignUp": {
                        "skin": "CopyCopybtnWHiteFocus3",
                        "segmentProps": []
                    },
                    "lblConsensus": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "16dp"
                        },
                        "skin": "CopyCopyCopydefLabel3",
                        "text": "Please validate your logon reguest to self service portal",
                        "top": {
                            "type": "string",
                            "value": "5%"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        },
                        "segmentProps": []
                    },
                    "lblErrorLogin": {
                        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                        "height": {
                            "type": "string",
                            "value": "20%"
                        },
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "10%"
                        },
                        "skin": "CopyCopyCopydefLabel4",
                        "text": "",
                        "top": {
                            "type": "string",
                            "value": "5%"
                        },
                        "width": {
                            "type": "string",
                            "value": "80%"
                        },
                        "segmentProps": []
                    }
                }
            }
            this.compInstData = {}
            this.add(imgBg, flxMain, flxLoading);
        };
        return [{
            "addWidgets": addWidgetsfrmAuthentication,
            "enabledForIdleTimeout": false,
            "id": "frmAuthentication",
            "init": controller.AS_Form_i8eef6ae50fb470da0cef48b88d5620f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [1200]
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});