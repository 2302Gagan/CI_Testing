define("userfrmOnBoardingController", {
    init: function() {
        this.view.onboarding.showLoading = this.showLoading;
        this.view.onboarding.dismissLoading = this.dismissLoading;
        this.view.onboarding.changeContext = this.changeContext;
        this.view.onboarding.switchLogin = this.switchLogin;
        this.view.loginComponent.showLoading = this.showLoading;
        this.view.loginComponent.dismissLoading = this.dismissLoading;
        this.view.loginComponent.changeContext = this.changeContext;
        this.view.lblSwitchLogin.onTouchStart = this.switchLogin;
        this.view.lblSwitchSignIn.onTouchStart = this.switchSignIn;
        this.view.onboarding.passwordPolicy = this.updatePasswordPolicy;
        this.changeContext("LoginAuth");
        this.view.preShow = this.preShow;
    },
    preShow: function() {
        this.switchLogin();
    },
    showLoading: function() {
        this.view.flxLoading.setVisibility(true);
        this.view.forceLayout();
    },
    dismissLoading: function() {
        this.view.flxLoading.setVisibility(false);
        this.view.forceLayout();
    },
    changeContext: function(context) {
        this.view.lblSwitchLogin.setVisibility(context === "Login");
        this.view.lblSwitchSignIn.setVisibility(context === "LoginAuth");
        let contexts = ["Login", "ConfirmPassword", "OTP", "Approve", "Error", "DeviceRegistration", "RegistrationSuccess", "LoginAuth", "ApproveAuth", "OTPAuth", "PushDevicesAuth"];
        for (let i of contexts) {
            this.view[`sider${i}`].setVisibility(i === context);
        }
        this.view.forceLayout();
    },
    updatePasswordPolicy: function(response) {
        var pwdMinDiffChar = +response.minDiffChars || 5;
        var pwdMinLength = +response.minLength || 5;
        var pwdMaxLength = +response.maxLength || 100;
        var pwdNotSequence = response.notSequence || "true";
        var pwdNotUserAttribute = response.notUserAttribute || "true";
        this.view.lblpolicy1.text = `Password should be minimum ${pwdMinLength} and maximum ${pwdMaxLength} characters.`;
        this.view.lblpolicy4.text = `Password should have minimum ${pwdMinDiffChar} different characters.`;
        this.view.lblpolicy3.setVisibility(pwdNotSequence === "true");
        this.view.lblpolicy5.setVisibility(pwdNotUserAttribute === "true");
    },
    switchLogin: function() {
        // alert("herre");
        this.showLoading();
        setTimeout(() => {
            this.view.onboarding.setVisibility(false);
            this.view.loginComponent.setVisibility(true);
            this.changeContext("LoginAuth");
            //this.view.onboarding.resetUI();
            this.view.loginComponent.resetUI();
            this.dismissLoading();
        }, 1000);
    },
    switchLoginLink: function() {
        kony.application.openURL("https://hidglobal-dev.konycloud.com/apps/HIDApproveDemo/#_frmOnBoarding");
    },
    switchSignIn: function() {
        //alert("herre");
        this.showLoading();
        setTimeout(() => {
            this.view.onboarding.setVisibility(true);
            this.view.loginComponent.setVisibility(false);
            this.view.onboarding.resetUI();
            //this.view.authentication.resetUI();
            this.dismissLoading();
        }, 1000);
    },
    onLogin: function() {
        var frmAccounts = new kony.mvc.Navigation("frmPostLogin");
        var username = this.view.loginComponent.getUserName();
        //var userId = this.view.onboarding.getUserId();
        //alert(username); 
        var myObj = {
            "username": username
        };
        frmAccounts.navigate(myObj);
    }
});
define("frmOnBoardingControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b106db361d7a4cd58ee94ae70e695dd3: function AS_Form_b106db361d7a4cd58ee94ae70e695dd3(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_UWI_fb246ac10a9a42d081168c3c74c73a59: function AS_UWI_fb246ac10a9a42d081168c3c74c73a59() {
        var self = this;
        alert("Login Failed");
    },
    AS_UWI_i382330ac1fb4f00beab0800a7102109: function AS_UWI_i382330ac1fb4f00beab0800a7102109(userprofileJSON) {
        var self = this;
        return self.onLogin.call(this);
    }
});
define("frmOnBoardingController", ["userfrmOnBoardingController", "frmOnBoardingControllerActions"], function() {
    var controller = require("userfrmOnBoardingController");
    var controllerActions = ["frmOnBoardingControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
