define("userCopyflxSegPushDevicesController", {
    //Type your controller code here 
});
define("CopyflxSegPushDevicesControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxSegPushDevices **/
    AS_FlexContainer_i7eaafadc75a465daff0c90b0e7b189e: function AS_FlexContainer_i7eaafadc75a465daff0c90b0e7b189e(eventobject, context) {
        var self = this;
    }
});
define("CopyflxSegPushDevicesController", ["userCopyflxSegPushDevicesController", "CopyflxSegPushDevicesControllerActions"], function() {
    var controller = require("userCopyflxSegPushDevicesController");
    var controllerActions = ["CopyflxSegPushDevicesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
