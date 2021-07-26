define(function() {
    return function(controller) {
        var onboarding = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "onboarding",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366]
        }, controller.args[0], "onboarding"), extendConfig({}, controller.args[1], "onboarding"), extendConfig({}, controller.args[2], "onboarding"));
        onboarding.setDefaultUnit(kony.flex.DP);
        var flxLogin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxLogin",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "53dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "215dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLogin"), extendConfig({}, controller.args[1], "flxLogin"), extendConfig({}, controller.args[2], "flxLogin"));
        flxLogin.setDefaultUnit(kony.flex.DP);
        var lblWelcome = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblWelcome",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopylblErrortext",
            "text": "Welcome!",
            "top": "10%",
            "width": "100%",
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
            "skin": "CopyCopydefLabel",
            "text": "Enter your Activation Code",
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
            "skin": "CopyCopyslFbox4",
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
            "skin": "CopyCopyslFontAwesomeIcon1",
            "text": "",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "Lock"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Lock"), extendConfig({}, controller.args[2], "Lock"));
        var tbxActivationCode = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "100%",
            "id": "tbxActivationCode",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "placeholder": "Activation Code",
            "secureTextEntry": true,
            "skin": "CopytbxPassword0b0902884d4db41",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0",
            "width": "86%",
            "zIndex": 1
        }, controller.args[0], "tbxActivationCode"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxActivationCode"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopytbxPassword0b9d697f8229449"
        }, controller.args[2], "tbxActivationCode"));
        flxPassword.add(Lock, tbxActivationCode);
        var flxForgotPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxForgotPassword",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox",
            "top": "1%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxForgotPassword"), extendConfig({}, controller.args[1], "flxForgotPassword"), extendConfig({}, controller.args[2], "flxForgotPassword"));
        flxForgotPassword.setDefaultUnit(kony.flex.DP);
        var flxRM = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxRM"), extendConfig({}, controller.args[1], "flxRM"), extendConfig({}, controller.args[2], "flxRM"));
        flxRM.setDefaultUnit(kony.flex.DP);
        var SquareLight = new kony.ui.Label(extendConfig({
            "id": "SquareLight",
            "isVisible": true,
            "left": "10dp",
            "skin": "CopyCopyslFontAwesomeIcon",
            "text": "",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "SquareLight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "SquareLight"), extendConfig({}, controller.args[2], "SquareLight"));
        var CheckSquareLight = new kony.ui.Label(extendConfig({
            "id": "CheckSquareLight",
            "isVisible": true,
            "left": "10dp",
            "skin": "CopyCopyslFontAwesomeIcon",
            "text": "",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "CheckSquareLight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CheckSquareLight"), extendConfig({}, controller.args[2], "CheckSquareLight"));
        var lblRememberMe = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblRememberMe",
            "isVisible": true,
            "left": "1%",
            "skin": "CopyCopydefLabel3",
            "text": "Remember Me",
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRememberMe"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRememberMe"), extendConfig({}, controller.args[2], "lblRememberMe"));
        flxRM.add(SquareLight, CheckSquareLight, lblRememberMe);
        var flxFuname = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxFuname"), extendConfig({}, controller.args[1], "flxFuname"), extendConfig({}, controller.args[2], "flxFuname"));
        flxFuname.setDefaultUnit(kony.flex.DP);
        var lblorgotPassword = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblorgotPassword",
            "isVisible": true,
            "left": "13%",
            "skin": "CopyCopydefLabel0a0c58ddd967449",
            "text": "Label",
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblorgotPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblorgotPassword"), extendConfig({}, controller.args[2], "lblorgotPassword"));
        flxFuname.add(lblorgotPassword);
        flxForgotPassword.add(flxRM, flxFuname);
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
            "skin": "CopyCopyslFbox",
            "top": "3%",
            "width": "55%",
            "zIndex": 1
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnLogin = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "CopybtnWHiteFocus",
            "height": "100%",
            "id": "btnLogin",
            "isVisible": false,
            "left": "0%",
            "skin": "CopyCopybtnBlueFocus2",
            "text": "SUBMIT",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogin"), extendConfig({}, controller.args[2], "btnLogin"));
        var btnSignUp = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "CopybtnWHiteFocus",
            "height": "100%",
            "id": "btnSignUp",
            "isVisible": true,
            "left": "3%",
            "skin": "CopyCopybtnBlueFocus2",
            "text": "REGISTER",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnSignUp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSignUp"), extendConfig({}, controller.args[2], "btnSignUp"));
        flxButtons.add(btnLogin, btnSignUp);
        var flxChoose = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "20%",
            "id": "flxChoose",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "3%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxChoose"), extendConfig({}, controller.args[1], "flxChoose"), extendConfig({}, controller.args[2], "flxChoose"));
        flxChoose.setDefaultUnit(kony.flex.DP);
        var lblChoose = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblChoose",
            "isVisible": true,
            "left": "13dp",
            "skin": "CopydefLabel0ce9ffb60e5f340",
            "text": "Choose Another Credential",
            "top": "4dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblChoose"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblChoose"), extendConfig({}, controller.args[2], "lblChoose"));
        var flxDiffAuth = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxDiffAuth"), extendConfig({}, controller.args[1], "flxDiffAuth"), extendConfig({}, controller.args[2], "flxDiffAuth"));
        flxDiffAuth.setDefaultUnit(kony.flex.DP);
        var icoApprove = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "icoApprove",
            "isVisible": true,
            "left": "5%",
            "skin": "slImage",
            "src": "approveicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "icoApprove"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icoApprove"), extendConfig({
            "toolTip": "Approve"
        }, controller.args[2], "icoApprove"));
        var icoSecure = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "icoSecure",
            "isVisible": true,
            "left": "5%",
            "skin": "slImage",
            "src": "imgsc.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "icoSecure"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icoSecure"), extendConfig({
            "toolTip": "Secure Code"
        }, controller.args[2], "icoSecure"));
        var icoSMS = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "icoSMS",
            "isVisible": true,
            "left": "5%",
            "skin": "slImage",
            "src": "smsotpicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "icoSMS"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icoSMS"), extendConfig({
            "toolTip": "SMS OTP"
        }, controller.args[2], "icoSMS"));
        var icoEmail = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "icoEmail",
            "isVisible": true,
            "left": "5%",
            "skin": "slImage",
            "src": "emailotpicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "icoEmail"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icoEmail"), extendConfig({
            "toolTip": "EMAIL OTP"
        }, controller.args[2], "icoEmail"));
        var icoHW = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "icoHW",
            "isVisible": true,
            "left": "5%",
            "skin": "slImage",
            "src": "imgpwdf.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "icoHW"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icoHW"), extendConfig({
            "toolTip": "Hardware OTP"
        }, controller.args[2], "icoHW"));
        flxDiffAuth.add(icoApprove, icoSecure, icoSMS, icoEmail, icoHW);
        flxChoose.add(lblChoose, flxDiffAuth);
        var lblConsensus = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblConsensus",
            "isVisible": false,
            "left": "16dp",
            "skin": "CopyCopydefLabel",
            "text": "Label",
            "top": "9dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblConsensus"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblConsensus"), extendConfig({}, controller.args[2], "lblConsensus"));
        var lblErrorLogin = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "15%",
            "id": "lblErrorLogin",
            "isVisible": true,
            "left": "25dp",
            "skin": "CopyCopydefLabel1",
            "text": "Label",
            "top": "10dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblErrorLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorLogin"), extendConfig({}, controller.args[2], "lblErrorLogin"));
        flxLogin.add(lblWelcome, lblSigntoAcc, flxUserName, flxPassword, flxForgotPassword, flxButtons, flxChoose, lblConsensus, lblErrorLogin);
        var flxApprove = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "49.95%",
            "centerY": "50.00%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxApprove",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "53dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "215dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxApprove"), extendConfig({}, controller.args[1], "flxApprove"), extendConfig({}, controller.args[2], "flxApprove"));
        flxApprove.setDefaultUnit(kony.flex.DP);
        var lblApprove = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblApprove",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopylblErrortext0aa6d8967c75446",
            "text": "HID Approve Notification",
            "top": "10%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblApprove"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblApprove"), extendConfig({}, controller.args[2], "lblApprove"));
        var lblMessage = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblMessage",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopyCopydefLabel",
            "text": "Test Registered Approve Device",
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({}, controller.args[2], "lblMessage"));
        var lblPushMessage = new kony.ui.Label(extendConfig({
            "centerX": "50.00%",
            "height": "25%",
            "id": "lblPushMessage",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopylblSubtext0h08ce324f7d041",
            "text": "A Push notification have been sent to your registered Approve Device. Please Approve the notification to complete the registration.",
            "top": "5%",
            "width": "75%",
            "zIndex": 1
        }, controller.args[0], "lblPushMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPushMessage"), extendConfig({}, controller.args[2], "lblPushMessage"));
        var lblPushMessageSubtext = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "5%",
            "id": "lblPushMessageSubtext",
            "isVisible": false,
            "left": "93dp",
            "skin": "lblSubtext",
            "text": "Please Approve the notification to complete registration",
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblPushMessageSubtext"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPushMessageSubtext"), extendConfig({}, controller.args[2], "lblPushMessageSubtext"));
        var flxButtonsApprove = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10%",
            "id": "flxButtonsApprove",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox",
            "top": "10%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "flxButtonsApprove"), extendConfig({}, controller.args[1], "flxButtonsApprove"), extendConfig({}, controller.args[2], "flxButtonsApprove"));
        flxButtonsApprove.setDefaultUnit(kony.flex.DP);
        var btnResendApprove = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "CopybtnWHiteFocus",
            "height": "100%",
            "id": "btnResendApprove",
            "isVisible": true,
            "left": "3%",
            "skin": "CopyCopybtnBlueFocus2",
            "text": "Resend Push Notification",
            "top": "0%",
            "width": "75%",
            "zIndex": 1
        }, controller.args[0], "btnResendApprove"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnResendApprove"), extendConfig({}, controller.args[2], "btnResendApprove"));
        flxButtonsApprove.add(btnResendApprove);
        var lblConsensusApprove = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblConsensusApprove",
            "isVisible": false,
            "left": "16dp",
            "skin": "CopyCopydefLabel",
            "text": "Label",
            "top": "9dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblConsensusApprove"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblConsensusApprove"), extendConfig({}, controller.args[2], "lblConsensusApprove"));
        var lblErrorApprove = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "10%",
            "id": "lblErrorApprove",
            "isVisible": true,
            "left": "25dp",
            "skin": "CopyCopydefLabel1",
            "top": "10dp",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblErrorApprove"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorApprove"), extendConfig({}, controller.args[2], "lblErrorApprove"));
        flxApprove.add(lblApprove, lblMessage, lblPushMessage, lblPushMessageSubtext, flxButtonsApprove, lblConsensusApprove, lblErrorApprove);
        var flxConfirmPassword = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxConfirmPassword",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "53dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "215dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxConfirmPassword"), extendConfig({}, controller.args[1], "flxConfirmPassword"), extendConfig({}, controller.args[2], "flxConfirmPassword"));
        flxConfirmPassword.setDefaultUnit(kony.flex.DP);
        var lblWelcome2 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblWelcome2",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopydefLabel0bbe867a373604f",
            "text": "Registration Process",
            "top": "10%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblWelcome2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWelcome2"), extendConfig({}, controller.args[2], "lblWelcome2"));
        var lblConfirmPassword = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblConfirmPassword",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopydefLabel0g84ee81965a24d",
            "text": "Add Password",
            "top": "2%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblConfirmPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblConfirmPassword"), extendConfig({}, controller.args[2], "lblConfirmPassword"));
        var flxPassword1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8.50%",
            "id": "flxPassword1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyslFbox0ab6fc5e47a3e49",
            "top": "8%",
            "width": "55%",
            "zIndex": 1
        }, controller.args[0], "flxPassword1"), extendConfig({}, controller.args[1], "flxPassword1"), extendConfig({}, controller.args[2], "flxPassword1"));
        flxPassword1.setDefaultUnit(kony.flex.DP);
        var lock3 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lock3",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslFontAwesomeIcon0g6e1f4283f3548",
            "text": "",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lock3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lock3"), extendConfig({}, controller.args[2], "lock3"));
        var tbxPassword1 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "100%",
            "id": "tbxPassword1",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "4%",
            "placeholder": "Password",
            "secureTextEntry": true,
            "skin": "CopytbxPassword0b0902884d4db41",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "tbxPassword1"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxPassword1"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopytbxPassword0d45a6e405a784a"
        }, controller.args[2], "tbxPassword1"));
        flxPassword1.add(lock3, tbxPassword1);
        var flxPassword2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8.50%",
            "id": "flxPassword2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyslFbox0ab6fc5e47a3e49",
            "top": "3%",
            "width": "55%",
            "zIndex": 1
        }, controller.args[0], "flxPassword2"), extendConfig({}, controller.args[1], "flxPassword2"), extendConfig({}, controller.args[2], "flxPassword2"));
        flxPassword2.setDefaultUnit(kony.flex.DP);
        var lock2 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lock2",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslFontAwesomeIcon0g6e1f4283f3548",
            "text": "",
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lock2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lock2"), extendConfig({}, controller.args[2], "lock2"));
        var tbxPassword2 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "100%",
            "id": "tbxPassword2",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "4%",
            "placeholder": "Confirm Password",
            "secureTextEntry": true,
            "skin": "CopytbxPassword0d45a6e405a784a",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "tbxPassword2"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxPassword2"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopytbxPassword0b9d697f8229449"
        }, controller.args[2], "tbxPassword2"));
        flxPassword2.add(lock2, tbxPassword2);
        var flxPasswordButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8.50%",
            "id": "flxPasswordButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox1",
            "top": "3%",
            "width": "55%",
            "zIndex": 1
        }, controller.args[0], "flxPasswordButtons"), extendConfig({}, controller.args[1], "flxPasswordButtons"), extendConfig({}, controller.args[2], "flxPasswordButtons"));
        flxPasswordButtons.setDefaultUnit(kony.flex.DP);
        var btnPwdSubmit = new kony.ui.Button(extendConfig({
            "focusSkin": "CopybtnWHiteFocus1",
            "height": "100%",
            "id": "btnPwdSubmit",
            "isVisible": true,
            "left": "0%",
            "skin": "CopybtnBlueFocus1",
            "text": "SUBMIT",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnPwdSubmit"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPwdSubmit"), extendConfig({}, controller.args[2], "btnPwdSubmit"));
        var btnPwdCancel = new kony.ui.Button(extendConfig({
            "focusSkin": "CopybtnBlueFocus1",
            "height": "100%",
            "id": "btnPwdCancel",
            "isVisible": true,
            "left": "4%",
            "skin": "CopybtnWHiteFocus1",
            "text": "CANCEL",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnPwdCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPwdCancel"), extendConfig({}, controller.args[2], "btnPwdCancel"));
        flxPasswordButtons.add(btnPwdSubmit, btnPwdCancel);
        var lblErrorPassword = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "10%",
            "id": "lblErrorPassword",
            "isVisible": true,
            "left": "25dp",
            "skin": "CopyCopydefLabel5",
            "text": "error",
            "top": "10dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblErrorPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorPassword"), extendConfig({}, controller.args[2], "lblErrorPassword"));
        flxConfirmPassword.add(lblWelcome2, lblConfirmPassword, flxPassword1, flxPassword2, flxPasswordButtons, lblErrorPassword);
        var flxOTP = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxOTP",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "121dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "177dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxOTP"), extendConfig({}, controller.args[1], "flxOTP"), extendConfig({}, controller.args[2], "flxOTP"));
        flxOTP.setDefaultUnit(kony.flex.DP);
        var lblWelcome6 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblWelcome6",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopydefLabel0c73129963c2547",
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
            "skin": "CopydefLabel0a3b96fff62bc42",
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
            "skin": "CopydefTextBoxNormal0d234b263869143",
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
            "placeholderSkin": "CopydefTextBoxNormal0d62e000b01d146"
        }, controller.args[2], "tbxOTP"));
        var lblErrorOTP = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "15%",
            "id": "lblErrorOTP",
            "isVisible": true,
            "left": "25dp",
            "skin": "CopydefLabel0ff0b524cba5048",
            "text": "invalid OTP entered \n You have 3 attempts before account is blocked",
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
            "skin": "CopyslFbox0e4a84b78473544",
            "top": "2%",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxOTPButtons"), extendConfig({}, controller.args[1], "flxOTPButtons"), extendConfig({}, controller.args[2], "flxOTPButtons"));
        flxOTPButtons.setDefaultUnit(kony.flex.DP);
        var btnConfirmOTP = new kony.ui.Button(extendConfig({
            "focusSkin": "btnWHiteFocus",
            "height": "100%",
            "id": "btnConfirmOTP",
            "isVisible": true,
            "left": "0%",
            "skin": "CopybtnBlueFocus0a8600c41763444",
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
            "focusSkin": "btnBlueFocus",
            "height": "100%",
            "id": "btnCancelOTP",
            "isVisible": true,
            "left": "4%",
            "skin": "CopybtnWHiteFocus0fea8e63da6714e",
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
        var flxRegistrationSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "49.98%",
            "centerY": "49.96%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxRegistrationSuccess",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "121dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "177dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRegistrationSuccess"), extendConfig({}, controller.args[1], "flxRegistrationSuccess"), extendConfig({}, controller.args[2], "flxRegistrationSuccess"));
        flxRegistrationSuccess.setDefaultUnit(kony.flex.DP);
        var WelcomeSuccess = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "WelcomeSuccess",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopydefLabel0e29316b3119843",
            "text": "Registration Successful",
            "top": "10%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "WelcomeSuccess"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "WelcomeSuccess"), extendConfig({}, controller.args[2], "WelcomeSuccess"));
        var CopylblPushMessage0deef99dae02346 = new kony.ui.Label(extendConfig({
            "centerX": "50.09%",
            "height": "30%",
            "id": "CopylblPushMessage0deef99dae02346",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopylblSubtext0a6e9794ec96a49",
            "text": "Dear user registration process is completed successfully. Please Login to experience the Digital Banking",
            "top": "10.00%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "CopylblPushMessage0deef99dae02346"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopylblPushMessage0deef99dae02346"), extendConfig({}, controller.args[2], "CopylblPushMessage0deef99dae02346"));
        var SuccessButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10%",
            "id": "SuccessButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyslFbox0e4a84b78473544",
            "top": "5%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "SuccessButtons"), extendConfig({}, controller.args[1], "SuccessButtons"), extendConfig({}, controller.args[2], "SuccessButtons"));
        SuccessButtons.setDefaultUnit(kony.flex.DP);
        var btnRegSuccess = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "btnWHiteFocus",
            "height": "100%",
            "id": "btnRegSuccess",
            "isVisible": true,
            "left": "0%",
            "skin": "CopybtnBlueFocus0a8600c41763444",
            "text": "Login",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnRegSuccess"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRegSuccess"), extendConfig({}, controller.args[2], "btnRegSuccess"));
        var btnRegCancel = new kony.ui.Button(extendConfig({
            "focusSkin": "btnBlueFocus",
            "height": "100%",
            "id": "btnRegCancel",
            "isVisible": false,
            "left": "4%",
            "skin": "CopybtnWHiteFocus0fea8e63da6714e",
            "text": "Cancel",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnRegCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRegCancel"), extendConfig({}, controller.args[2], "btnRegCancel"));
        SuccessButtons.add(btnRegSuccess, btnRegCancel);
        flxRegistrationSuccess.add(WelcomeSuccess, CopylblPushMessage0deef99dae02346, SuccessButtons);
        var flxError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxError",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "121dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "177dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxError"), extendConfig({}, controller.args[1], "flxError"), extendConfig({}, controller.args[2], "flxError"));
        flxError.setDefaultUnit(kony.flex.DP);
        var lblWelcomeFailed = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblWelcomeFailed",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopydefLabel0e29316b3119843",
            "text": "Registration Failed",
            "top": "10%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblWelcomeFailed"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWelcomeFailed"), extendConfig({}, controller.args[2], "lblWelcomeFailed"));
        var lblRegError = new kony.ui.Label(extendConfig({
            "centerX": "50.09%",
            "height": "15%",
            "id": "lblRegError",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopysknRegError0i70be71e445b4e",
            "text": "Registration has been failed. Please contact support",
            "top": "10.00%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblRegError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRegError"), extendConfig({}, controller.args[2], "lblRegError"));
        var grpErrorButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10%",
            "id": "grpErrorButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyslFbox0e4a84b78473544",
            "top": "5%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "grpErrorButtons"), extendConfig({}, controller.args[1], "grpErrorButtons"), extendConfig({}, controller.args[2], "grpErrorButtons"));
        grpErrorButtons.setDefaultUnit(kony.flex.DP);
        var btnGoHome = new kony.ui.Button(extendConfig({
            "centerX": "50.00%",
            "focusSkin": "btnWHiteFocus",
            "height": "100%",
            "id": "btnGoHome",
            "isVisible": true,
            "left": "0%",
            "skin": "CopybtnBlueFocus0a8600c41763444",
            "text": "Go Home",
            "top": "-0.24%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnGoHome"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnGoHome"), extendConfig({}, controller.args[2], "btnGoHome"));
        grpErrorButtons.add(btnGoHome);
        flxError.add(lblWelcomeFailed, lblRegError, grpErrorButtons);
        var flxDeviceRegistration = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxDeviceRegistration",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "53dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "215dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDeviceRegistration"), extendConfig({}, controller.args[1], "flxDeviceRegistration"), extendConfig({}, controller.args[2], "flxDeviceRegistration"));
        flxDeviceRegistration.setDefaultUnit(kony.flex.DP);
        var lblWelcomeQR = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "7%",
            "id": "lblWelcomeQR",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopyCopydefLabel2",
            "text": "Registration Process",
            "top": "5%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblWelcomeQR"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWelcomeQR"), extendConfig({}, controller.args[2], "lblWelcomeQR"));
        var lblScanQR1 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "15%",
            "id": "lblScanQR1",
            "isVisible": false,
            "left": "93dp",
            "skin": "lblSubtext",
            "text": "Scan your QR Code using HID Approve app on your  mobile device",
            "top": "2%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblScanQR1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblScanQR1"), extendConfig({}, controller.args[2], "lblScanQR1"));
        var lblScanQR = new kony.ui.RichText(extendConfig({
            "centerX": "50%",
            "height": "16%",
            "id": "lblScanQR",
            "isVisible": true,
            "left": "0dp",
            "linkSkin": "defRichTextLink",
            "skin": "CopydefRichTextNormal0acd9fcd5826b4f",
            "text": "<p>Scan your QR Code using HID Approve app on your  mobile device</p>",
            "top": "2%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblScanQR"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblScanQR"), extendConfig({}, controller.args[2], "lblScanQR"));
        var flxRegOptions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "49%",
            "id": "flxRegOptions",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0g7f94244023143",
            "top": "1%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRegOptions"), extendConfig({}, controller.args[1], "flxRegOptions"), extendConfig({}, controller.args[2], "flxRegOptions"));
        flxRegOptions.setDefaultUnit(kony.flex.DP);
        var flxQRMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "90%",
            "id": "flxQRMain",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "364dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "flxQRMain"), extendConfig({}, controller.args[1], "flxQRMain"), extendConfig({}, controller.args[2], "flxQRMain"));
        flxQRMain.setDefaultUnit(kony.flex.DP);
        var qrcodegenerator = new com.konymp.qrcodegenerator(extendConfig({
            "centerX": "50%",
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
                "qrcodegenerator": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
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
        qrcodegenerator.qrcodeWidth = "140";
        qrcodegenerator.qrcodeHeight = "140";
        qrcodegenerator.correctLevel = "Level M";
        flxQRMain.add(qrcodegenerator);
        var flxManualMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxManualMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "198dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxManualMain"), extendConfig({}, controller.args[1], "flxManualMain"), extendConfig({}, controller.args[2], "flxManualMain"));
        flxManualMain.setDefaultUnit(kony.flex.DP);
        var lblUid1 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "12%",
            "id": "lblUid1",
            "isVisible": false,
            "left": "93dp",
            "skin": "lblSubtext",
            "text": "username : RonladoCR7",
            "top": "15%",
            "width": "100%",
            "zIndex": 50
        }, controller.args[0], "lblUid1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUid1"), extendConfig({}, controller.args[2], "lblUid1"));
        var lblInvCode1 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "12%",
            "id": "lblInvCode1",
            "isVisible": false,
            "left": "93dp",
            "skin": "lblSubtext",
            "text": "Invite Code : qewru2843j321",
            "top": "5%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblInvCode1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblInvCode1"), extendConfig({}, controller.args[2], "lblInvCode1"));
        var lblUid = new kony.ui.RichText(extendConfig({
            "height": "12%",
            "id": "lblUid",
            "isVisible": true,
            "left": "0dp",
            "linkSkin": "defRichTextLink",
            "skin": "CopydefRichTextNormal0d69af441f5ab45",
            "text": "<p>RichText</p>",
            "top": "6%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblUid"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUid"), extendConfig({}, controller.args[2], "lblUid"));
        var lblInvCode = new kony.ui.RichText(extendConfig({
            "height": "12%",
            "id": "lblInvCode",
            "isVisible": true,
            "left": "0dp",
            "linkSkin": "defRichTextLink",
            "skin": "CopydefRichTextNormal0d69af441f5ab45",
            "text": "<p>RichText</p>",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblInvCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblInvCode"), extendConfig({}, controller.args[2], "lblInvCode"));
        var lblRegURL1 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblRegURL1",
            "isVisible": true,
            "left": "93dp",
            "skin": "lblSubtext",
            "text": "Service URL: ",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblRegURL1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRegURL1"), extendConfig({}, controller.args[2], "lblRegURL1"));
        var lblRegURL = new kony.ui.RichText(extendConfig({
            "height": "12%",
            "id": "lblRegURL",
            "isVisible": true,
            "left": "0dp",
            "linkSkin": "defRichTextLink",
            "skin": "CopydefRichTextNormal0ef31e421311a4c",
            "text": "<p>RichText</p>",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblRegURL"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRegURL"), extendConfig({}, controller.args[2], "lblRegURL"));
        var lblRegURL12 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblRegURL12",
            "isVisible": false,
            "left": "93dp",
            "skin": "CopysknURL0ed23c4e8678e40",
            "top": "5%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblRegURL12"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRegURL12"), extendConfig({}, controller.args[2], "lblRegURL12"));
        flxManualMain.add(lblUid1, lblInvCode1, lblUid, lblInvCode, lblRegURL1, lblRegURL, lblRegURL12);
        flxRegOptions.add(flxQRMain, flxManualMain);
        var flxbuttonsQR = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8.50%",
            "id": "flxbuttonsQR",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10%",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox3",
            "top": "1%",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxbuttonsQR"), extendConfig({}, controller.args[1], "flxbuttonsQR"), extendConfig({}, controller.args[2], "flxbuttonsQR"));
        flxbuttonsQR.setDefaultUnit(kony.flex.DP);
        var btnPushDone = new kony.ui.Button(extendConfig({
            "focusSkin": "CopybtnWHiteFocus2",
            "height": "100%",
            "id": "btnPushDone",
            "isVisible": true,
            "left": "0%",
            "skin": "CopybtnBlueFocus1",
            "text": "Done",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnPushDone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPushDone"), extendConfig({}, controller.args[2], "btnPushDone"));
        var btnCancelScanQR = new kony.ui.Button(extendConfig({
            "focusSkin": "CopybtnBlueFocus1",
            "height": "100%",
            "id": "btnCancelScanQR",
            "isVisible": true,
            "left": "4%",
            "skin": "CopybtnWHiteFocus2",
            "text": "Cancel",
            "top": "0%",
            "width": "48%",
            "zIndex": 1
        }, controller.args[0], "btnCancelScanQR"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancelScanQR"), extendConfig({}, controller.args[2], "btnCancelScanQR"));
        flxbuttonsQR.add(btnPushDone, btnCancelScanQR);
        var lblActivatemanually = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblActivatemanually",
            "isVisible": true,
            "left": "93dp",
            "skin": "CopyCopydefLabel2",
            "text": "Activate Manually",
            "top": "3%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblActivatemanually"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblActivatemanually"), extendConfig({}, controller.args[2], "lblActivatemanually"));
        flxDeviceRegistration.add(lblWelcomeQR, lblScanQR1, lblScanQR, flxRegOptions, flxbuttonsQR, lblActivatemanually);
        onboarding.add(flxLogin, flxApprove, flxConfirmPassword, flxOTP, flxRegistrationSuccess, flxError, flxDeviceRegistration);
        onboarding.breakpointResetData = {};
        onboarding.breakpointData = {
            maxBreakpointWidth: 1366,
        }
        onboarding.compInstData = {
            "qrcodegenerator": {
                "right": "",
                "bottom": "",
                "minWidth": "",
                "minHeight": "",
                "maxWidth": "",
                "maxHeight": "",
                "centerY": ""
            }
        }
        return onboarding;
    }
})