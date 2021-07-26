kony.appinit.setApplicationMetaConfiguration("appid", "HIDApproveDemo");
kony.appinit.setApplicationMetaConfiguration("build", "debug");
kony.appinit.setApplicationMetaConfiguration("defaultLocale", "en");
kony.appinit.setApplicationMetaConfiguration("locales", ["ar", "de_DE", "en", "en_GB", "en_US", "es", "es_ES", "fr_FR"]);
kony.appinit.setApplicationMetaConfiguration("i18nArray", []);
kony.appinit.setApplicationMetaConfiguration("localization", "true");
kony.appinit.setApplicationMetaConfiguration("i18nVersion", "831254803");
//startup.js
var appConfig = {
    appId: "HIDApproveDemo",
    appName: "OnboardingApprove",
    appVersion: "1.0.0",
    isDebug: true,
    isMFApp: false,
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        responsive: true,
        APILevel: 8400,
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: kony.appinit.getStaticContentPath() + 'desktopweb/appjs'
    });
    require(['kvmodules'], function() {
        applicationController = require("applicationController");
        kony.application.setApplicationInitializationEvents({
            init: applicationController.appInit,
            postappinit: applicationController.postAppInitCallBack,
            showstartupform: function() {
                new kony.mvc.Navigation("frmOnBoarding").navigate();
            }
        });
    });
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function loadResources() {
    kony.theme.packagedthemes(["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //This is the entry point for the application.When Locale comes,Local API call will be the entry point.
    kony.i18n.setDefaultLocaleAsync("en", onSuccess, onFailure, null);
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								