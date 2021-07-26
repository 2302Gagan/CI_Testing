define("frmOnSuccesAuthenticate", function() {
    return function(controller) {
        function addWidgetsfrmOnSuccesAuthenticate() {
            this.setDefaultUnit(kony.flex.DP);
            var imgAccounts = new kony.ui.Image2({
                "id": "imgAccounts",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "accountid.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnLogout = new kony.ui.Button({
                "height": "60dp",
                "id": "btnLogout",
                "isVisible": true,
                "left": "30dp",
                "onClick": controller.AS_Button_db313cc4b59a44e5b5fe6ee6c7c485e2,
                "right": "-0.08%",
                "skin": "CopydefBtnNormal0ba6322dc66af43",
                "top": "10dp",
                "width": "115dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.compInstData = {}
            this.add(imgAccounts, btnLogout);
        };
        return [{
            "addWidgets": addWidgetsfrmOnSuccesAuthenticate,
            "enabledForIdleTimeout": false,
            "id": "frmOnSuccesAuthenticate",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1200]
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