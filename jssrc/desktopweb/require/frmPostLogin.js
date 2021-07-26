define("frmPostLogin", function() {
    return function(controller) {
        function addWidgetsfrmPostLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var imgBg = new kony.ui.Image2({
                "height": "100%",
                "id": "imgBg",
                "isVisible": false,
                "left": "0dp",
                "skin": "slImage",
                "src": "savin_ny_website_background_web.jpg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDashBoard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "flxDashBoard",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "15%",
                "isModalContainer": false,
                "skin": "flxmain",
                "top": "14%",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxDashBoard.setDefaultUnit(kony.flex.DP);
            var flxProfileMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxProfileMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "3%",
                "isModalContainer": false,
                "skin": "CopyslFbox0g457839c8c1f4c",
                "top": "91dp",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flxProfileMain.setDefaultUnit(kony.flex.DP);
            var imgAvatar = new kony.ui.Image2({
                "centerX": "50%",
                "height": "150dp",
                "id": "imgAvatar",
                "isVisible": true,
                "left": "104dp",
                "skin": "slImage",
                "src": "free_profile_avatars.png",
                "top": "5%",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMyProfile = new kony.ui.Label({
                "id": "lblMyProfile",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0g8eed82d382347",
                "text": "My Profile",
                "top": "5%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblName = new kony.ui.Label({
                "id": "lblName",
                "isVisible": true,
                "left": "12%",
                "skin": "CopydefLabel0h76a8530431748",
                "text": "John Doe",
                "top": "2%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxPhone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "3%",
                "id": "flxPhone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "12%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxPhone.setDefaultUnit(kony.flex.DP);
            var Call = new kony.ui.Label({
                "centerY": "50%",
                "id": "Call",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslFontAwesomeIcon0b6de3453776d4f",
                "text": "",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCall = new kony.ui.Label({
                "height": "100%",
                "id": "lblCall",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0h76a8530431748",
                "text": "+11 44445528",
                "top": "0%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPhone.add(Call, lblCall);
            var flxEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4%",
                "id": "flxEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "12%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxEmail.setDefaultUnit(kony.flex.DP);
            var EnvelopeDark = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "EnvelopeDark",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslFontAwesomeIcon0a0d4f57a9e1742",
                "text": "",
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEmail = new kony.ui.Label({
                "height": "100%",
                "id": "lblEmail",
                "isVisible": true,
                "left": "10%",
                "skin": "CopydefLabel0h76a8530431748",
                "text": "John@gmail.com",
                "top": "0%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmail.add(EnvelopeDark, lblEmail);
            flxProfileMain.add(imgAvatar, lblMyProfile, lblName, flxPhone, flxEmail);
            var flxAccountsMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxAccountsMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "3%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "61dp",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxAccountsMain.setDefaultUnit(kony.flex.DP);
            var flxAccountsList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35%",
                "id": "flxAccountsList",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountsList.setDefaultUnit(kony.flex.DP);
            var flxAccounts1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAccounts1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0g457839c8c1f4c",
                "top": "0%",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            flxAccounts1.setDefaultUnit(kony.flex.DP);
            var flxAccountsHdr1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxAccountsHdr1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountsHdr1.setDefaultUnit(kony.flex.DP);
            var imgAccounts1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgAccounts1",
                "isVisible": true,
                "left": "28dp",
                "skin": "slImage",
                "src": "piggybank.png",
                "top": "10dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMyAccount1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMyAccount1",
                "isVisible": true,
                "left": "2%",
                "skin": "CopydefLabel0c42d556e207d4f",
                "text": "Savings Account",
                "top": "5%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountsHdr1.add(imgAccounts1, lblMyAccount1);
            var lblAccounts1 = new kony.ui.Label({
                "id": "lblAccounts1",
                "isVisible": true,
                "left": "12%",
                "skin": "CopydefLabel0b3853225b85847",
                "text": "1089 2828 2321 3332",
                "top": "2%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSavingsAccount1 = new kony.ui.Label({
                "id": "lblSavingsAccount1",
                "isVisible": true,
                "left": "12%",
                "skin": "CopydefLabel0g299a75c0c004f",
                "text": "Savings Account",
                "top": "2%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccounts1.add(flxAccountsHdr1, lblAccounts1, lblSavingsAccount1);
            var flxAccounts2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAccounts2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "3%",
                "isModalContainer": false,
                "skin": "CopyslFbox0g457839c8c1f4c",
                "top": "0%",
                "width": "48.50%",
                "zIndex": 1
            }, {}, {});
            flxAccounts2.setDefaultUnit(kony.flex.DP);
            var flxAccountsHdr2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxAccountsHdr2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountsHdr2.setDefaultUnit(kony.flex.DP);
            var imgAccounts2 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgAccounts2",
                "isVisible": true,
                "left": "28dp",
                "skin": "slImage",
                "src": "accountsicon2.png",
                "top": "10dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMyAccount2 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMyAccount2",
                "isVisible": true,
                "left": "2%",
                "skin": "CopydefLabel0c42d556e207d4f",
                "text": "Loan Account",
                "top": "5%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountsHdr2.add(imgAccounts2, lblMyAccount2);
            var lblAccount2 = new kony.ui.Label({
                "id": "lblAccount2",
                "isVisible": true,
                "left": "12%",
                "skin": "CopydefLabel0b3853225b85847",
                "text": "2384 1231 4300 0098",
                "top": "2%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSavingsAccount2 = new kony.ui.Label({
                "id": "lblSavingsAccount2",
                "isVisible": true,
                "left": "12%",
                "skin": "CopydefLabel0g299a75c0c004f",
                "text": "Loan Account",
                "top": "2%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccounts2.add(flxAccountsHdr2, lblAccount2, lblSavingsAccount2);
            flxAccountsList.add(flxAccounts1, flxAccounts2);
            var flxCards = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60%",
                "id": "flxCards",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0g457839c8c1f4c",
                "top": "5%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCards.setDefaultUnit(kony.flex.DP);
            var flxMyCards = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "flxMyCards",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMyCards.setDefaultUnit(kony.flex.DP);
            var imgMyCards = new kony.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgMyCards",
                "isVisible": true,
                "left": "28dp",
                "skin": "slImage",
                "src": "cards.jpg",
                "top": "10dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMyCards = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMyCards",
                "isVisible": true,
                "left": "2%",
                "skin": "CopydefLabel0c42d556e207d4f",
                "text": "My Cards",
                "top": "5%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMyCards.add(imgMyCards, lblMyCards);
            var flxCardslist = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "flxCardslist",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "2%",
                "isModalContainer": false,
                "skin": "flxmain",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxCardslist.setDefaultUnit(kony.flex.DP);
            var imgCard1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "200dp",
                "id": "imgCard1",
                "isVisible": true,
                "left": "3%",
                "skin": "slImage",
                "src": "creditcard5.png",
                "top": "82dp",
                "width": "200dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgCard2 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "200dp",
                "id": "imgCard2",
                "isVisible": true,
                "left": "3%",
                "skin": "slImage",
                "src": "creditcard1.png",
                "top": "82dp",
                "width": "200dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgCard3 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "200dp",
                "id": "imgCard3",
                "isVisible": true,
                "left": "3%",
                "skin": "slImage",
                "src": "creditcard4.png",
                "top": "82dp",
                "width": "200dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCardslist.add(imgCard1, imgCard2, imgCard3);
            flxCards.add(flxMyCards, flxCardslist);
            flxAccountsMain.add(flxAccountsList, flxCards);
            flxDashBoard.add(flxProfileMain, flxAccountsMain);
            var flxTransfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "flxTransfer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "15%",
                "isModalContainer": false,
                "skin": "flxmain",
                "top": "14%",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxTransfer.setDefaultUnit(kony.flex.DP);
            var flxMainTS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxMainTS",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "CopyslFbox0a4299e72e0194c",
                "top": "50dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxMainTS.setDefaultUnit(kony.flex.DP);
            var FlexContainer0jfcde7e6244342 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "20%",
                "id": "FlexContainer0jfcde7e6244342",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "78dp",
                "isModalContainer": false,
                "skin": "flxmain",
                "top": "5%",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0jfcde7e6244342.setDefaultUnit(kony.flex.DP);
            FlexContainer0jfcde7e6244342.add();
            var transactionSigning = new com.hid.transactionSigning({
                "height": "100%",
                "id": "transactionSigning",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "transactionSigning": {
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
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            transactionSigning.username = "SyamTest1";
            transactionSigning.tds = "Sending amount transfer";
            flxMainTS.add(FlexContainer0jfcde7e6244342, transactionSigning);
            var flxSelectModes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "45%",
                "id": "flxSelectModes",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "CopyslFbox0a4299e72e0194c",
                "top": "172dp",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxSelectModes.setDefaultUnit(kony.flex.DP);
            var lblSelectModes = new kony.ui.Label({
                "centerX": "50%",
                "height": "20%",
                "id": "lblSelectModes",
                "isVisible": true,
                "left": "5%",
                "skin": "sknlblTSThemeBlue",
                "text": "Transaction Signing Options",
                "top": "5%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnModeApprove = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnModeFocus",
                "height": "15%",
                "id": "btnModeApprove",
                "isVisible": false,
                "left": "37dp",
                "skin": "sknBtnModes",
                "text": "Approve",
                "top": "10%",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnModeOffline = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnModeFocus",
                "height": "15%",
                "id": "btnModeOffline",
                "isVisible": true,
                "left": "37dp",
                "skin": "sknBtnModes",
                "text": "Offline Signature",
                "top": "10%",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnModeChallenge = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnModeFocus",
                "height": "15%",
                "id": "btnModeChallenge",
                "isVisible": true,
                "left": "37dp",
                "skin": "sknBtnModes",
                "text": "Challenge - Response",
                "top": "10%",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectModes.add(lblSelectModes, btnModeApprove, btnModeOffline, btnModeChallenge);
            flxTransfer.add(flxMainTS, flxSelectModes);
            var flxSettings = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "flxSettings",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "15%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "14%",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxSettings.setDefaultUnit(kony.flex.DP);
            var userManagement = new com.hid.userManagement({
                "height": "100%",
                "id": "userManagement",
                "isVisible": true,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 10,
                "overrides": {
                    "userManagement": {
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
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            userManagement.Username = "";
            flxSettings.add(userManagement);
            var imgHID = new kony.ui.Image2({
                "height": "40dp",
                "id": "imgHID",
                "isVisible": true,
                "left": "4%",
                "skin": "slImage",
                "src": "poweredby.png",
                "top": "4%",
                "width": "80dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var PowerOff = new kony.ui.Label({
                "id": "PowerOff",
                "isVisible": true,
                "onTouchStart": controller.AS_Label_cda21da6d153493c81e6eac76c42c82a,
                "right": "2%",
                "skin": "CopyslFontAwesomeIcon0h5d29f90986647",
                "text": "",
                "top": "3%",
                "width": "4%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAccountsDasBoard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxAccountsDasBoard",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "15%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3%",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxAccountsDasBoard.setDefaultUnit(kony.flex.DP);
            var lblDashBoard = new kony.ui.Label({
                "id": "lblDashBoard",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0bd6d1a123fa441",
                "text": "My Finance DashBoard",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHIDBanking = new kony.ui.Label({
                "id": "lblHIDBanking",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0afc87f41309b44",
                "text": "Welcome to HID Digital banking Experience",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountsDasBoard.add(lblDashBoard, lblHIDBanking);
            var flxMenu = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxMenu",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "2%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20%",
                "width": "13%",
                "zIndex": 1
            }, {}, {});
            flxMenu.setDefaultUnit(kony.flex.DP);
            var btnNavDashBoard = new kony.ui.Button({
                "focusSkin": "sknBtnInActive",
                "height": "20%",
                "id": "btnNavDashBoard",
                "isVisible": true,
                "left": "0%",
                "skin": "sknBtnActiveNormal",
                "text": "DashBoard",
                "top": "5%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnNavTransfer = new kony.ui.Button({
                "focusSkin": "sknBtnInActive",
                "height": "20%",
                "id": "btnNavTransfer",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtnActiveNormal",
                "text": "Transfer",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnNavSettings = new kony.ui.Button({
                "focusSkin": "sknBtnInActive",
                "height": "20%",
                "id": "btnNavSettings",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtnActiveNormal",
                "text": "Settings",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMenu.add(btnNavDashBoard, btnNavTransfer, btnNavSettings);
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
            var flxTSSuccess = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTSSuccess",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0e948f1f1864741",
                "top": "0dp",
                "width": "100%",
                "zIndex": 35
            }, {}, {});
            flxTSSuccess.setDefaultUnit(kony.flex.DP);
            var CheckCircleDark = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CheckCircleDark",
                "isVisible": false,
                "left": "10dp",
                "skin": "CopyslFontAwesomeIcon0fe6c121cb62d40",
                "text": "",
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgSuccess = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "200dp",
                "id": "imgSuccess",
                "isVisible": false,
                "left": "596dp",
                "skin": "slImage",
                "src": "success_checkmark.gif",
                "top": "361dp",
                "width": "200dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTSSuccess.add(CheckCircleDark, imgSuccess);
            var loginComponent = new com.hid.loginComponent({
                "height": "100%",
                "id": "loginComponent",
                "isVisible": false,
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
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            loginComponent.MFA = "APPROVE";
            var btnReset = new kony.ui.Button({
                "focusSkin": "btnTransparent",
                "height": "40dp",
                "id": "btnReset",
                "isVisible": true,
                "left": "4%",
                "skin": "btnTransparent",
                "top": "4%",
                "width": "80dp",
                "zIndex": 50
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.compInstData = {
                "transactionSigning": {
                    "right": "",
                    "bottom": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": "",
                    "centerX": "",
                    "centerY": ""
                },
                "userManagement": {
                    "right": "",
                    "bottom": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": "",
                    "centerX": "",
                    "centerY": ""
                },
                "loginComponent": {
                    "right": "",
                    "bottom": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": "",
                    "centerX": "",
                    "centerY": ""
                }
            }
            this.add(imgBg, flxDashBoard, flxTransfer, flxSettings, imgHID, PowerOff, flxAccountsDasBoard, flxMenu, flxLoading, flxTSSuccess, loginComponent, btnReset);
        };
        return [{
            "addWidgets": addWidgetsfrmPostLogin,
            "enabledForIdleTimeout": false,
            "id": "frmPostLogin",
            "init": controller.AS_Form_ab2c9e7a4d704430a591d691e7df5934,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknBtnActive",
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