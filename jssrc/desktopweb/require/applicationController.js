define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.hid.loginComponent", "loginComponent", "loginComponentController");
        kony.application.registerMaster({
            "namespace": "com.hid",
            "classname": "loginComponent",
            "name": "com.hid.loginComponent"
        });
        kony.mvc.registry.add("com.hid.transactionSigning", "transactionSigning", "transactionSigningController");
        kony.application.registerMaster({
            "namespace": "com.hid",
            "classname": "transactionSigning",
            "name": "com.hid.transactionSigning"
        });
        kony.mvc.registry.add("com.konymp.qrcodegenerator", "qrcodegenerator", "qrcodegeneratorController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "qrcodegenerator",
            "name": "com.konymp.qrcodegenerator"
        });
        kony.mvc.registry.add("com.konymp.qrcodegeneratorCopy", "qrcodegeneratorCopy", "qrcodegeneratorCopyController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "qrcodegeneratorCopy",
            "name": "com.konymp.qrcodegeneratorCopy"
        });
        kony.mvc.registry.add("com.hid.onboarding", "onboarding", "onboardingController");
        kony.application.registerMaster({
            "namespace": "com.hid",
            "classname": "onboarding",
            "name": "com.hid.onboarding"
        });
        kony.mvc.registry.add("com.hid.userManagement", "userManagement", "userManagementController");
        kony.application.registerMaster({
            "namespace": "com.hid",
            "classname": "userManagement",
            "name": "com.hid.userManagement"
        });
        kony.mvc.registry.add("CopyflxDevicesSegment", "CopyflxDevicesSegment", "CopyflxDevicesSegmentController");
        kony.mvc.registry.add("CopyflxDevicesSegment1", "CopyflxDevicesSegment1", "CopyflxDevicesSegment1Controller");
        kony.mvc.registry.add("CopyflxSegPushDevices", "CopyflxSegPushDevices", "CopyflxSegPushDevicesController");
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("flxDevicesSegment", "flxDevicesSegment", "flxDevicesSegmentController");
        kony.mvc.registry.add("flxSegPushDevices", "flxSegPushDevices", "flxSegPushDevicesController");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        kony.mvc.registry.add("frmAuthentication", "frmAuthentication", "frmAuthenticationController");
        kony.mvc.registry.add("frmOnBoarding", "frmOnBoarding", "frmOnBoardingController");
        kony.mvc.registry.add("frmOnSuccesAuthenticate", "frmOnSuccesAuthenticate", "frmOnSuccesAuthenticateController");
        kony.mvc.registry.add("frmPostLogin", "frmPostLogin", "frmPostLoginController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmOnBoarding").navigate();
    }
});