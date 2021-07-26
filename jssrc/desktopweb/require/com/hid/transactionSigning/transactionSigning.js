define(function() {
    return function(controller) {
        var transactionSigning = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "transactionSigning",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-9dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "-13dp",
            "width": "100%",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366]
        }, controller.args[0], "transactionSigning"), extendConfig({}, controller.args[1], "transactionSigning"), extendConfig({}, controller.args[2], "transactionSigning"));
        transactionSigning.setDefaultUnit(kony.flex.DP);
        var flxTSApprove = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50.00%",
            "centerY": "50.05%",
            "clipBounds": true,
            "height": "100.00%",
            "id": "flxTSApprove",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "212dp",
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox0c580608c768e42",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTSApprove"), extendConfig({}, controller.args[1], "flxTSApprove"), extendConfig({}, controller.args[2], "flxTSApprove"));
        flxTSApprove.setDefaultUnit(kony.flex.DP);
        var flxToAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8%",
            "id": "flxToAccount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxToAccount"), extendConfig({}, controller.args[1], "flxToAccount"), extendConfig({}, controller.args[2], "flxToAccount"));
        flxToAccount.setDefaultUnit(kony.flex.DP);
        var lblToAccount = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblToAccount",
            "isVisible": true,
            "left": "5%",
            "skin": "sknlblTSThemeBlue",
            "text": "To Account*",
            "top": "0%",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "lblToAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAccount"), extendConfig({}, controller.args[2], "lblToAccount"));
        var tbxToAccount = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxToAccount",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxToAccount"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxToAccount"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxToAccount"));
        flxToAccount.add(lblToAccount, tbxToAccount);
        var flxCurrency = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8%",
            "id": "flxCurrency",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxCurrency"), extendConfig({}, controller.args[1], "flxCurrency"), extendConfig({}, controller.args[2], "flxCurrency"));
        flxCurrency.setDefaultUnit(kony.flex.DP);
        var lblCurrency = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblCurrency",
            "isVisible": true,
            "left": "5%",
            "skin": "sknlblTSThemeBlue",
            "text": "Currency",
            "top": "0%",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "lblCurrency"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCurrency"), extendConfig({}, controller.args[2], "lblCurrency"));
        var tbxCurrency = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxCurrency",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "text": "USD",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxCurrency"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxCurrency"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxCurrency"));
        flxCurrency.add(lblCurrency, tbxCurrency);
        var flxAmount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8%",
            "id": "flxAmount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxAmount"), extendConfig({}, controller.args[1], "flxAmount"), extendConfig({}, controller.args[2], "flxAmount"));
        flxAmount.setDefaultUnit(kony.flex.DP);
        var lblAmount = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblAmount",
            "isVisible": true,
            "left": "5%",
            "skin": "sknlblTSThemeBlue",
            "text": "Amount*",
            "top": "0%",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "lblAmount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmount"), extendConfig({}, controller.args[2], "lblAmount"));
        var tbxAmount = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxAmount",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxAmount"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxAmount"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxAmount"));
        flxAmount.add(lblAmount, tbxAmount);
        var flxDesc = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8%",
            "id": "flxDesc",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxDesc"), extendConfig({}, controller.args[1], "flxDesc"), extendConfig({}, controller.args[2], "flxDesc"));
        flxDesc.setDefaultUnit(kony.flex.DP);
        var lblDescription = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "5%",
            "skin": "sknlblTSThemeBlue",
            "text": "Remarks*",
            "top": "0%",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "lblDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescription"), extendConfig({}, controller.args[2], "lblDescription"));
        var tbxDescription = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxDescription",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxDescription"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxDescription"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxDescription"));
        flxDesc.add(lblDescription, tbxDescription);
        var btnLogin = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "CopyCopyCopyCopybtnWHiteFocus",
            "height": "8%",
            "id": "btnLogin",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyCopyCopybtnBlueFocus12",
            "text": "SUBMIT",
            "top": "3%",
            "width": "22%",
            "zIndex": 1
        }, controller.args[0], "btnLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLogin"), extendConfig({}, controller.args[2], "btnLogin"));
        var lblApproveSend = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "9%",
            "id": "lblApproveSend",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblTSSuccess",
            "text": "Login to your account",
            "top": "2%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblApproveSend"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblApproveSend"), extendConfig({}, controller.args[2], "lblApproveSend"));
        var lblError = new kony.ui.Label(extendConfig({
            "centerX": "50.04%",
            "height": "8%",
            "id": "lblError",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblTSError",
            "text": "Label",
            "top": "1.00%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblError"), extendConfig({}, controller.args[2], "lblError"));
        flxTSApprove.add(flxToAccount, flxCurrency, flxAmount, flxDesc, btnLogin, lblApproveSend, lblError);
        var flxTSOffline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "49.97%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxTSOffline",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "212dp",
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox0c580608c768e42",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTSOffline"), extendConfig({}, controller.args[1], "flxTSOffline"), extendConfig({}, controller.args[2], "flxTSOffline"));
        flxTSOffline.setDefaultUnit(kony.flex.DP);
        var flxToAccountOffline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "9%",
            "id": "flxToAccountOffline",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "44dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxToAccountOffline"), extendConfig({}, controller.args[1], "flxToAccountOffline"), extendConfig({}, controller.args[2], "flxToAccountOffline"));
        flxToAccountOffline.setDefaultUnit(kony.flex.DP);
        var lblToAccountOffline = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblToAccountOffline",
            "isVisible": true,
            "left": "22dp",
            "skin": "sknlblTSThemeBlue",
            "text": "To Account*",
            "top": "0%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblToAccountOffline"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAccountOffline"), extendConfig({}, controller.args[2], "lblToAccountOffline"));
        var tbxToAccountOffline = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxToAccountOffline",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxToAccountOffline"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxToAccountOffline"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxToAccountOffline"));
        flxToAccountOffline.add(lblToAccountOffline, tbxToAccountOffline);
        var flxCurrencyOffline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "9%",
            "id": "flxCurrencyOffline",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "44dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxCurrencyOffline"), extendConfig({}, controller.args[1], "flxCurrencyOffline"), extendConfig({}, controller.args[2], "flxCurrencyOffline"));
        flxCurrencyOffline.setDefaultUnit(kony.flex.DP);
        var lblCurrencyOffline = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblCurrencyOffline",
            "isVisible": true,
            "left": "22dp",
            "skin": "sknlblTSThemeBlue",
            "text": "Currency",
            "top": "0%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblCurrencyOffline"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCurrencyOffline"), extendConfig({}, controller.args[2], "lblCurrencyOffline"));
        var tbxCurrencyOffline = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxCurrencyOffline",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "text": "USD",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxCurrencyOffline"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxCurrencyOffline"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxCurrencyOffline"));
        flxCurrencyOffline.add(lblCurrencyOffline, tbxCurrencyOffline);
        var flxAmountOffline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "9%",
            "id": "flxAmountOffline",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "44dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxAmountOffline"), extendConfig({}, controller.args[1], "flxAmountOffline"), extendConfig({}, controller.args[2], "flxAmountOffline"));
        flxAmountOffline.setDefaultUnit(kony.flex.DP);
        var lblAmountOffline = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblAmountOffline",
            "isVisible": true,
            "left": "22dp",
            "skin": "sknlblTSThemeBlue",
            "text": "Amount*",
            "top": "0%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblAmountOffline"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountOffline"), extendConfig({}, controller.args[2], "lblAmountOffline"));
        var tbxAmountOffline = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxAmountOffline",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxAmountOffline"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxAmountOffline"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxAmountOffline"));
        flxAmountOffline.add(lblAmountOffline, tbxAmountOffline);
        var flxDescOffline = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "9%",
            "id": "flxDescOffline",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "44dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxDescOffline"), extendConfig({}, controller.args[1], "flxDescOffline"), extendConfig({}, controller.args[2], "flxDescOffline"));
        flxDescOffline.setDefaultUnit(kony.flex.DP);
        var lblDescriptionOffline = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDescriptionOffline",
            "isVisible": true,
            "left": "22dp",
            "skin": "sknlblTSThemeBlue",
            "text": "Remarks*",
            "top": "0%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblDescriptionOffline"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescriptionOffline"), extendConfig({}, controller.args[2], "lblDescriptionOffline"));
        var tbxDescriptionOffline = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxDescriptionOffline",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxDescriptionOffline"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxDescriptionOffline"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxDescriptionOffline"));
        flxDescOffline.add(lblDescriptionOffline, tbxDescriptionOffline);
        var flxOTP = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "9%",
            "id": "flxOTP",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "44dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxOTP"), extendConfig({}, controller.args[1], "flxOTP"), extendConfig({}, controller.args[2], "flxOTP"));
        flxOTP.setDefaultUnit(kony.flex.DP);
        var lblOTP = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblOTP",
            "isVisible": true,
            "left": "22dp",
            "skin": "sknlblTSThemeBlue",
            "text": "Secure Code*",
            "top": "0%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblOTP"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOTP"), extendConfig({}, controller.args[2], "lblOTP"));
        var tbxOTPOffline = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxOTPOffline",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxOTPOffline"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxOTPOffline"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxOTPOffline"));
        flxOTP.add(lblOTP, tbxOTPOffline);
        var btnLoginOffline = new kony.ui.Button(extendConfig({
            "centerX": "50.00%",
            "focusSkin": "CopyCopyCopyCopybtnWHiteFocus",
            "height": "9%",
            "id": "btnLoginOffline",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyCopyCopybtnBlueFocus12",
            "text": "SUBMIT",
            "top": "5%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "btnLoginOffline"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLoginOffline"), extendConfig({}, controller.args[2], "btnLoginOffline"));
        var lblTSSuccess = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "10%",
            "id": "lblTSSuccess",
            "isVisible": true,
            "left": "93dp",
            "skin": "sknlblTSSuccess",
            "text": "Login to your account",
            "top": "2%",
            "width": "80%",
            "zIndex": 1,
            "blur": {
                "enabled": false,
                "value": 0
            }
        }, controller.args[0], "lblTSSuccess"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTSSuccess"), extendConfig({}, controller.args[2], "lblTSSuccess"));
        var lblErrorOffline = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblErrorOffline",
            "isVisible": true,
            "left": "25dp",
            "skin": "sknlblTSError",
            "text": "Label",
            "top": "0%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblErrorOffline"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorOffline"), extendConfig({}, controller.args[2], "lblErrorOffline"));
        flxTSOffline.add(flxToAccountOffline, flxCurrencyOffline, flxAmountOffline, flxDescOffline, flxOTP, btnLoginOffline, lblTSSuccess, lblErrorOffline);
        var flxTSChallenge = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxTSChallenge",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "212dp",
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox0c580608c768e42",
            "top": "6dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTSChallenge"), extendConfig({}, controller.args[1], "flxTSChallenge"), extendConfig({}, controller.args[2], "flxTSChallenge"));
        flxTSChallenge.setDefaultUnit(kony.flex.DP);
        var flxToAccountChallenge = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "7%",
            "id": "flxToAccountChallenge",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "44dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxToAccountChallenge"), extendConfig({}, controller.args[1], "flxToAccountChallenge"), extendConfig({}, controller.args[2], "flxToAccountChallenge"));
        flxToAccountChallenge.setDefaultUnit(kony.flex.DP);
        var lblToAccountChallenge = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblToAccountChallenge",
            "isVisible": true,
            "left": "22dp",
            "skin": "sknlblTSThemeBlue",
            "text": "To Account*",
            "top": "0%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblToAccountChallenge"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAccountChallenge"), extendConfig({}, controller.args[2], "lblToAccountChallenge"));
        var tbxToAccountChallenge = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxToAccountChallenge",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxToAccountChallenge"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxToAccountChallenge"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxToAccountChallenge"));
        flxToAccountChallenge.add(lblToAccountChallenge, tbxToAccountChallenge);
        var flxCurrencyChallenge = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "9%",
            "id": "flxCurrencyChallenge",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "44dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "7%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxCurrencyChallenge"), extendConfig({}, controller.args[1], "flxCurrencyChallenge"), extendConfig({}, controller.args[2], "flxCurrencyChallenge"));
        flxCurrencyChallenge.setDefaultUnit(kony.flex.DP);
        var lblCurrencyChallenge = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblCurrencyChallenge",
            "isVisible": true,
            "left": "22dp",
            "skin": "sknlblTSThemeBlue",
            "text": "Currency",
            "top": "0%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblCurrencyChallenge"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCurrencyChallenge"), extendConfig({}, controller.args[2], "lblCurrencyChallenge"));
        var tbxCurrencyChallenge = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxCurrencyChallenge",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "text": "USD",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxCurrencyChallenge"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxCurrencyChallenge"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxCurrencyChallenge"));
        flxCurrencyChallenge.add(lblCurrencyChallenge, tbxCurrencyChallenge);
        var flxAmountChallenge = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "7%",
            "id": "flxAmountChallenge",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "44dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "4%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxAmountChallenge"), extendConfig({}, controller.args[1], "flxAmountChallenge"), extendConfig({}, controller.args[2], "flxAmountChallenge"));
        flxAmountChallenge.setDefaultUnit(kony.flex.DP);
        var lblAmountChallenge = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblAmountChallenge",
            "isVisible": true,
            "left": "22dp",
            "skin": "sknlblTSThemeBlue",
            "text": "Amount*",
            "top": "0%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblAmountChallenge"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountChallenge"), extendConfig({}, controller.args[2], "lblAmountChallenge"));
        var tbxAmountChallenge = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxAmountChallenge",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxAmountChallenge"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxAmountChallenge"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxAmountChallenge"));
        flxAmountChallenge.add(lblAmountChallenge, tbxAmountChallenge);
        var flxDescChallenge = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "7%",
            "id": "flxDescChallenge",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "44dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "4%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxDescChallenge"), extendConfig({}, controller.args[1], "flxDescChallenge"), extendConfig({}, controller.args[2], "flxDescChallenge"));
        flxDescChallenge.setDefaultUnit(kony.flex.DP);
        var lblDescriptionChallenge = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblDescriptionChallenge",
            "isVisible": true,
            "left": "22dp",
            "skin": "sknlblTSThemeBlue",
            "text": "Remarks*",
            "top": "0%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblDescriptionChallenge"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescriptionChallenge"), extendConfig({}, controller.args[2], "lblDescriptionChallenge"));
        var tbxDescriptionChallenge = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxDescriptionChallenge",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxDescriptionChallenge"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxDescriptionChallenge"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxDescriptionChallenge"));
        flxDescChallenge.add(lblDescriptionChallenge, tbxDescriptionChallenge);
        var btnGenerateChallenge = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "CopyCopyCopyCopybtnWHiteFocus",
            "height": "7%",
            "id": "btnGenerateChallenge",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyCopyCopybtnBlueFocus12",
            "text": "GENERATE OTP",
            "top": "5%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "btnGenerateChallenge"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnGenerateChallenge"), extendConfig({}, controller.args[2], "btnGenerateChallenge"));
        var lblChallenge = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "10%",
            "id": "lblChallenge",
            "isVisible": true,
            "left": "93dp",
            "skin": "sknlblTSSuccess",
            "text": "Login to your account",
            "top": "3%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblChallenge"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblChallenge"), extendConfig({}, controller.args[2], "lblChallenge"));
        var flxOTPChallenge = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "7%",
            "id": "flxOTPChallenge",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "44dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "3%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxOTPChallenge"), extendConfig({}, controller.args[1], "flxOTPChallenge"), extendConfig({}, controller.args[2], "flxOTPChallenge"));
        flxOTPChallenge.setDefaultUnit(kony.flex.DP);
        var lblOTPChallenge = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblOTPChallenge",
            "isVisible": true,
            "left": "22dp",
            "skin": "sknlblTSThemeBlue",
            "text": "Secure Code*",
            "top": "0%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblOTPChallenge"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOTPChallenge"), extendConfig({}, controller.args[2], "lblOTPChallenge"));
        var tbxOTPChallenge = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "100%",
            "id": "tbxOTPChallenge",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxOTPChallenge"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxOTPChallenge"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxOTPChallenge"));
        flxOTPChallenge.add(lblOTPChallenge, tbxOTPChallenge);
        var btnLoginChallenge = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "CopyCopyCopyCopybtnWHiteFocus",
            "height": "7%",
            "id": "btnLoginChallenge",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyCopyCopybtnBlueFocus12",
            "text": "SUBMIT",
            "top": "5%",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "btnLoginChallenge"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnLoginChallenge"), extendConfig({}, controller.args[2], "btnLoginChallenge"));
        var lblTSSuccessChallenge = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "10%",
            "id": "lblTSSuccessChallenge",
            "isVisible": true,
            "left": "93dp",
            "skin": "sknlblTSSuccess",
            "text": "Login to your account",
            "top": "3%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblTSSuccessChallenge"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTSSuccessChallenge"), extendConfig({}, controller.args[2], "lblTSSuccessChallenge"));
        var lblErrorChallenge = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblErrorChallenge",
            "isVisible": true,
            "left": "25dp",
            "skin": "sknlblTSError",
            "text": "Label",
            "top": "1%",
            "width": "70%",
            "zIndex": 1
        }, controller.args[0], "lblErrorChallenge"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorChallenge"), extendConfig({}, controller.args[2], "lblErrorChallenge"));
        flxTSChallenge.add(flxToAccountChallenge, flxCurrencyChallenge, flxAmountChallenge, flxDescChallenge, btnGenerateChallenge, lblChallenge, flxOTPChallenge, btnLoginChallenge, lblTSSuccessChallenge, lblErrorChallenge);
        var flxAddBeneficiary = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "76%",
            "centerY": "50.00%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxAddBeneficiary",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "212dp",
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox0c580608c768e42",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "flxAddBeneficiary"), extendConfig({}, controller.args[1], "flxAddBeneficiary"), extendConfig({}, controller.args[2], "flxAddBeneficiary"));
        flxAddBeneficiary.setDefaultUnit(kony.flex.DP);
        var flxBnfAccountNo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8%",
            "id": "flxBnfAccountNo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxBnfAccountNo"), extendConfig({}, controller.args[1], "flxBnfAccountNo"), extendConfig({}, controller.args[2], "flxBnfAccountNo"));
        flxBnfAccountNo.setDefaultUnit(kony.flex.DP);
        var lblBnfAccountNo = new kony.ui.Label(extendConfig({
            "height": "80%",
            "id": "lblBnfAccountNo",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblTSThemeBlue",
            "text": "Account No*",
            "top": "0%",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "lblBnfAccountNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBnfAccountNo"), extendConfig({}, controller.args[2], "lblBnfAccountNo"));
        var tbxBnfAccountNo = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "80%",
            "id": "tbxBnfAccountNo",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxBnfAccountNo"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxBnfAccountNo"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxBnfAccountNo"));
        flxBnfAccountNo.add(lblBnfAccountNo, tbxBnfAccountNo);
        var flxBnfName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8%",
            "id": "flxBnfName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxBnfName"), extendConfig({}, controller.args[1], "flxBnfName"), extendConfig({}, controller.args[2], "flxBnfName"));
        flxBnfName.setDefaultUnit(kony.flex.DP);
        var lblBnfName = new kony.ui.Label(extendConfig({
            "height": "80%",
            "id": "lblBnfName",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblTSThemeBlue",
            "text": "Name*",
            "top": "0%",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "lblBnfName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBnfName"), extendConfig({}, controller.args[2], "lblBnfName"));
        var tbxBnfName = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "80%",
            "id": "tbxBnfName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "text": "USD",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxBnfName"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxBnfName"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxBnfName"));
        flxBnfName.add(lblBnfName, tbxBnfName);
        var flxBnfRemarks = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "8%",
            "id": "flxBnfRemarks",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxBnfRemarks"), extendConfig({}, controller.args[1], "flxBnfRemarks"), extendConfig({}, controller.args[2], "flxBnfRemarks"));
        flxBnfRemarks.setDefaultUnit(kony.flex.DP);
        var lblBnfRemarks = new kony.ui.Label(extendConfig({
            "height": "80%",
            "id": "lblBnfRemarks",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblTSThemeBlue",
            "text": "Remarks*",
            "top": "0%",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "lblBnfRemarks"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBnfRemarks"), extendConfig({}, controller.args[2], "lblBnfRemarks"));
        var tbxBnfRemarks = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopysknTbxHIDBLUE1",
            "height": "80%",
            "id": "tbxBnfRemarks",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "secureTextEntry": false,
            "skin": "CopyCopysknTbxHIDBLUE1",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "tbxBnfRemarks"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxBnfRemarks"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyCopyCopysknTbxHIDBLUE"
        }, controller.args[2], "tbxBnfRemarks"));
        flxBnfRemarks.add(lblBnfRemarks, tbxBnfRemarks);
        var btnAddBeneficiary = new kony.ui.Button(extendConfig({
            "centerX": "42%",
            "focusSkin": "CopyCopyCopyCopybtnWHiteFocus",
            "height": "8%",
            "id": "btnAddBeneficiary",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Button_dff7d086809c48dbbd946e49e701e048,
            "skin": "CopyCopyCopyCopybtnBlueFocus12",
            "text": "Add Beneficiary",
            "top": "3%",
            "width": "22%",
            "zIndex": 1
        }, controller.args[0], "btnAddBeneficiary"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAddBeneficiary"), extendConfig({}, controller.args[2], "btnAddBeneficiary"));
        var lblBnfApproveSend = new kony.ui.Label(extendConfig({
            "centerX": "42%",
            "height": "4%",
            "id": "lblBnfApproveSend",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknlblTSSuccess",
            "text": "Login to your account",
            "top": "2%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblBnfApproveSend"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBnfApproveSend"), extendConfig({}, controller.args[2], "lblBnfApproveSend"));
        var lblBnfError = new kony.ui.Label(extendConfig({
            "centerX": "42%",
            "height": "8%",
            "id": "lblBnfError",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblTSError",
            "text": "Label",
            "top": "1%",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblBnfError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBnfError"), extendConfig({}, controller.args[2], "lblBnfError"));
        flxAddBeneficiary.add(flxBnfAccountNo, flxBnfName, flxBnfRemarks, btnAddBeneficiary, lblBnfApproveSend, lblBnfError);
        var flxResponse = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "226dp",
            "id": "flxResponse",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "100dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "75.84%"
        }, controller.args[0], "flxResponse"), extendConfig({}, controller.args[1], "flxResponse"), extendConfig({}, controller.args[2], "flxResponse"));
        flxResponse.setDefaultUnit(kony.flex.DP);
        var lblMessage = new kony.ui.Label(extendConfig({
            "centerX": "51.22%",
            "height": "30.97%",
            "id": "lblMessage",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblTSSuccess",
            "top": "4.42%",
            "width": "101.82%",
            "zIndex": 1
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({}, controller.args[2], "lblMessage"));
        var lblErrorResponse = new kony.ui.Label(extendConfig({
            "centerX": "51.24%",
            "height": "25.00%",
            "id": "lblErrorResponse",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblTSError",
            "top": "22.57%",
            "width": "92.02%",
            "zIndex": 1
        }, controller.args[0], "lblErrorResponse"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorResponse"), extendConfig({}, controller.args[2], "lblErrorResponse"));
        flxResponse.add(lblMessage, lblErrorResponse);
        transactionSigning.add(flxTSApprove, flxTSOffline, flxTSChallenge, flxAddBeneficiary, flxResponse);
        transactionSigning.compInstData = {}
        return transactionSigning;
    }
})