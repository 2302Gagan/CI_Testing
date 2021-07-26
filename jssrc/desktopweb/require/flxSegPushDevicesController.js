define("userflxSegPushDevicesController", {
    //Type your controller code here 
});
define("flxSegPushDevicesControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxSegPushDevices **/
    AS_FlexContainer_i7eaafadc75a465daff0c90b0e7b189e: function AS_FlexContainer_i7eaafadc75a465daff0c90b0e7b189e(eventobject, context) {
        var self = this;
    }
});
define("flxSegPushDevicesController", ["userflxSegPushDevicesController", "flxSegPushDevicesControllerActions"], function() {
    var controller = require("userflxSegPushDevicesController");
    var controllerActions = ["flxSegPushDevicesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
