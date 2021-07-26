define("userCopyflxDevicesSegmentController", {
    onEditTouchEnd: function(eventobject) {
        var secIndex = eventobject.rowContext.sectionIndex;
        var rowIndex = eventobject.rowContext.rowIndex;
        this.executeOnParent("editTouchEnd", {
            row: rowIndex,
            section: secIndex
        });
    },
    onCancelTouchEnd: function(eventobject) {
        var secIndex = eventobject.rowContext.sectionIndex;
        var rowIndex = eventobject.rowContext.rowIndex;
        this.executeOnParent("cancelEdit", {
            row: rowIndex,
            section: secIndex
        });
    },
    onEditOkTouchEnd: function(eventobject) {
        var secIndex = eventobject.rowContext.sectionIndex;
        var rowIndex = eventobject.rowContext.rowIndex;
        this.executeOnParent("editFriendlyName", {
            row: rowIndex,
            section: secIndex
        });
    }
});
define("CopyflxDevicesSegmentControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Label_e587c4de9c1d4f079cef9b3317f8e063: function AS_Label_e587c4de9c1d4f079cef9b3317f8e063(eventobject, x, y, context) {
        var self = this;
        return self.onEditTouchEnd.call(this, eventobject);
    },
    AS_Button_c9174637f75d475aae1d12132cd9f2a6: function AS_Button_c9174637f75d475aae1d12132cd9f2a6(eventobject, context) {
        var self = this;
        this.executeOnParent("changeDeviceStatusOnClick", {
            row: eventobject.rowContext.rowIndex,
            section: eventobject.rowContext.sectionIndex
        });
    },
    AS_Image_b4b99946a9d94190b4f5e451bca4b4ae: function AS_Image_b4b99946a9d94190b4f5e451bca4b4ae(eventobject, x, y, context) {
        var self = this;
        return self.onCancelTouchEnd.call(this, eventobject);
    },
    AS_Image_a757a45392974197aa290d8b96f64671: function AS_Image_a757a45392974197aa290d8b96f64671(eventobject, x, y, context) {
        var self = this;
        return self.onEditOkTouchEnd.call(this, eventobject);
    }
});
define("CopyflxDevicesSegmentController", ["userCopyflxDevicesSegmentController", "CopyflxDevicesSegmentControllerActions"], function() {
    var controller = require("userCopyflxDevicesSegmentController");
    var controllerActions = ["CopyflxDevicesSegmentControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
