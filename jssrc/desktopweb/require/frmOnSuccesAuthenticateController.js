define("userfrmOnSuccesAuthenticateController", {
    //Type your controller code here 
});
define("frmOnSuccesAuthenticateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_db313cc4b59a44e5b5fe6ee6c7c485e2: function AS_Button_db313cc4b59a44e5b5fe6ee6c7c485e2(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmOnBoarding");
        ntf.navigate();
    }
});
define("frmOnSuccesAuthenticateController", ["userfrmOnSuccesAuthenticateController", "frmOnSuccesAuthenticateControllerActions"], function() {
    var controller = require("userfrmOnSuccesAuthenticateController");
    var controllerActions = ["frmOnSuccesAuthenticateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
