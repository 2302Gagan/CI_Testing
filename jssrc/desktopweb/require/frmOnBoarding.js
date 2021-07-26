define("frmOnBoarding", function() {
    return function(controller) {
        function addWidgetsfrmOnBoarding() {
            this.setDefaultUnit(kony.flex.DP);
            var imgBg = new kony.ui.Image2({
                "height": "100%",
                "id": "imgBg",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "fronteledawn02.jpg",
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
                "skin": "CopyslFbox0fc7ba5930d3a4b",
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
                "skin": "sknHIDTransparentBlue",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxImg.setDefaultUnit(kony.flex.DP);
            var siderLogin = new kony.ui.Image2({
                "height": "100%",
                "id": "siderLogin",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "successfull.jpg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var siderLoginAuth = new kony.ui.Image2({
                "height": "100%",
                "id": "siderLoginAuth",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "successfull.jpg",
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
                "src": "img21.jpg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var siderConfirmPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "siderConfirmPassword",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "36dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            siderConfirmPassword.setDefaultUnit(kony.flex.DP);
            var lblRegStep1 = new kony.ui.Label({
                "height": "10%",
                "id": "lblRegStep1",
                "isVisible": true,
                "skin": "lblwHite",
                "text": "Registration Step 1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblPwdPolicy = new kony.ui.Label({
                "id": "lblPwdPolicy",
                "isVisible": true,
                "left": "5%",
                "skin": "CopylblwHite0b4ac55dfd7c940",
                "text": "Password Policy",
                "top": "12%",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblpolicy1 = new kony.ui.Label({
                "id": "lblpolicy1",
                "isVisible": true,
                "left": "5%",
                "skin": "CopylblwHite0ib4cbe5eedf249",
                "text": "Password should be minimum 5 and maximum 100 characters.  ",
                "top": "3%",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblpolicy2 = new kony.ui.Label({
                "id": "lblpolicy2",
                "isVisible": true,
                "left": "5%",
                "skin": "CopylblwHite0ib4cbe5eedf249",
                "text": "Password should not be as same as your old password.",
                "top": "1%",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblpolicy3 = new kony.ui.Label({
                "id": "lblpolicy3",
                "isVisible": true,
                "left": "5%",
                "skin": "CopylblwHite0ib4cbe5eedf249",
                "text": "Password should not be a letters or numbers sequence.",
                "top": "1%",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblpolicy4 = new kony.ui.Label({
                "id": "lblpolicy4",
                "isVisible": true,
                "left": "5%",
                "skin": "CopylblwHite0ib4cbe5eedf249",
                "text": "Password should have minimum 5 different characters.",
                "top": "1%",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblpolicy5 = new kony.ui.Label({
                "id": "lblpolicy5",
                "isVisible": true,
                "left": "5%",
                "skin": "CopylblwHite0ib4cbe5eedf249",
                "text": "Password should not contain username and is not a user attribute.",
                "top": "1%",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            siderConfirmPassword.add(lblRegStep1, lblPwdPolicy, lblpolicy1, lblpolicy2, lblpolicy3, lblpolicy4, lblpolicy5);
            var siderOTP = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "siderOTP",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknHIDmerge",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            siderOTP.setDefaultUnit(kony.flex.DP);
            var imgOTP = new kony.ui.Image2({
                "height": "150dp",
                "id": "imgOTP",
                "isVisible": true,
                "left": "45dp",
                "skin": "slImage",
                "src": "emailotp.png",
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
                "skin": "lblRoundWhiteeqqerewr",
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
                "skin": "lblRoundRed",
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
                "skin": "lblRoundWhite",
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
                "skin": "lblRoundWhite",
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
            flxWrongAttemps.add(flxAttempts);
            siderOTP.add(imgOTP, flxWrongAttemps);
            var siderOTPAuth = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "siderOTPAuth",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            siderOTPAuth.setDefaultUnit(kony.flex.DP);
            var imgOTPAuth = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgOTPAuth",
                "isVisible": true,
                "left": "45dp",
                "skin": "slImage",
                "src": "secure_code.png",
                "top": "75dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            siderOTPAuth.add(imgOTPAuth);
            var siderApprove = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "siderApprove",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknHIDmerge",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            siderApprove.setDefaultUnit(kony.flex.DP);
            var imgMFA = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "imgMFA",
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
            siderApprove.add(imgMFA);
            var siderPushDevicesAuth = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "siderPushDevicesAuth",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            siderPushDevicesAuth.setDefaultUnit(kony.flex.DP);
            var imgMFA1 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "imgMFA1",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "approvenew.png",
                "top": "0",
                "width": "80%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            siderPushDevicesAuth.add(imgMFA1);
            var siderApproveAuth = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "siderApproveAuth",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            siderApproveAuth.setDefaultUnit(kony.flex.DP);
            var CopyimgMFA0a93ea89164b846 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "80%",
                "id": "CopyimgMFA0a93ea89164b846",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "approvenew.png",
                "top": "0",
                "width": "80%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            siderApproveAuth.add(CopyimgMFA0a93ea89164b846);
            var siderError = new kony.ui.Image2({
                "height": "100%",
                "id": "siderError",
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
            var siderDeviceRegistration = new kony.ui.Image2({
                "height": "100%",
                "id": "siderDeviceRegistration",
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
            flxImg.add(siderLogin, siderLoginAuth, siderRegistrationSuccess, siderConfirmPassword, siderOTP, siderOTPAuth, siderApprove, siderPushDevicesAuth, siderApproveAuth, siderError, siderDeviceRegistration);
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
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
                "src": "hid.png",
                "top": "5%",
                "width": "70.00%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var onboarding = new com.hid.onboarding({
                "centerY": "55%",
                "height": "80%",
                "id": "onboarding",
                "isVisible": false,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "onboarding": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            onboarding.MFA = "APPROVE";
            var lblSwitchLogin = new kony.ui.Label({
                "centerX": "50%",
                "height": "10%",
                "id": "lblSwitchLogin",
                "isVisible": false,
                "left": "40dp",
                "skin": "CopylblSubtext0f0b8ea5deb2942",
                "text": "Already Registered User?",
                "top": "80%",
                "width": "100%",
                "zIndex": 15
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSwitchSignIn = new kony.ui.Label({
                "centerX": "50%",
                "height": "10%",
                "id": "lblSwitchSignIn",
                "isVisible": false,
                "left": "40dp",
                "skin": "CopylblSubtext0f0b8ea5deb2942",
                "text": "New User? Sign Up",
                "top": "80%",
                "width": "100%",
                "zIndex": 15
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var loginComponent = new com.hid.loginComponent({
                "centerY": "50%",
                "height": "80%",
                "id": "loginComponent",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0b19bc41e63b044",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "loginComponent": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            loginComponent.MFA = "APPROVE";
            loginComponent.onSuccessCallback = controller.AS_UWI_i382330ac1fb4f00beab0800a7102109;
            loginComponent.onFailureCallback = controller.AS_UWI_fb246ac10a9a42d081168c3c74c73a59;
            flxContent.add(imgHID, onboarding, lblSwitchLogin, lblSwitchSignIn, loginComponent);
            flxMain.add(flxImg, flxContent);
            var flxPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "15%",
                "id": "flxPopUp",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "167dp",
                "isModalContainer": false,
                "skin": "sknBgWhite",
                "top": "315dp",
                "width": "47%",
                "zIndex": 5
            }, {}, {});
            flxPopUp.setDefaultUnit(kony.flex.DP);
            var lblErrortext = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblErrortext",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopylblErrortext0g79de23a021446",
                "text": "Are you sure you want to exit the Login Process",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSubErrorMsg = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSubErrorMsg",
                "isVisible": true,
                "left": "93dp",
                "skin": "CopydefLabel0cbb0b6b2ddfa49",
                "text": "On Cancellation you need to contact Support to continue registration",
                "top": "6%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxBtnPopUps = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "24%",
                "id": "flxBtnPopUps",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox5",
                "top": "8%",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxBtnPopUps.setDefaultUnit(kony.flex.DP);
            var btnPopSubmit = new kony.ui.Button({
                "focusSkin": "CopybtnWHiteFocus3",
                "height": "100%",
                "id": "btnPopSubmit",
                "isVisible": true,
                "left": "0%",
                "skin": "CopybtnBlueFocus0ecbe5f8f9bb346",
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
            var btnPopCancel = new kony.ui.Button({
                "focusSkin": "CopybtnBlueFocus",
                "height": "100%",
                "id": "btnPopCancel",
                "isVisible": true,
                "left": "4%",
                "skin": "CopyCopybtnWHiteFocus",
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
            flxBtnPopUps.add(btnPopSubmit, btnPopCancel);
            flxPopUp.add(lblErrortext, lblSubErrorMsg, flxBtnPopUps);
            var flxLoading = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoading",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0d6ed5fbab3b346",
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
                "src": "image_732.gif",
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
                maxBreakpointWidth: 1366,
                "1200": {
                    "imgBg": {
                        "isVisible": true,
                        "src": "fronteledawn02.jpg",
                        "segmentProps": []
                    },
                    "flxImg": {
                        "isVisible": true,
                        "segmentProps": []
                    },
                    "siderLogin": {
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "siderLoginAuth": {
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "siderRegistrationSuccess": {
                        "width": {
                            "type": "string",
                            "value": "100%"
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
                    "imgOTPAuth": {
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
                    "siderApprove": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "imgMFA": {
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
                    "siderDeviceRegistration": {
                        "src": "placeholder3.jpg",
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "lblErrortext": {
                        "segmentProps": []
                    },
                    "lblSubErrorMsg": {
                        "segmentProps": []
                    },
                    "flxBtnPopUps": {
                        "layoutType": kony.flex.FLOW_HORIZONTAL,
                        "skin": "CopyCopyslFbox5",
                        "segmentProps": []
                    },
                    "btnPopSubmit": {
                        "focusSkin": "CopybtnWHiteFocus0g2f195d8032a45",
                        "skin": "CopybtnBlueFocus0ecbe5f8f9bb346",
                        "text": "SUBMIT",
                        "segmentProps": []
                    },
                    "btnPopCancel": {
                        "focusSkin": "CopybtnBlueFocus0gab18d6246c940",
                        "skin": "CopyCopybtnWHiteFocus",
                        "text": "CANCEL",
                        "segmentProps": []
                    }
                }
            }
            this.compInstData = {
                "onboarding": {
                    "right": "",
                    "bottom": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": "",
                    "centerX": ""
                },
                "loginComponent": {
                    "right": "",
                    "bottom": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": "",
                    "centerX": ""
                }
            }
            this.add(imgBg, flxMain, flxPopUp, flxLoading);
        };
        return [{
            "addWidgets": addWidgetsfrmOnBoarding,
            "enabledForIdleTimeout": false,
            "id": "frmOnBoarding",
            "init": controller.AS_Form_b106db361d7a4cd58ee94ae70e695dd3,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1200, 1366]
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