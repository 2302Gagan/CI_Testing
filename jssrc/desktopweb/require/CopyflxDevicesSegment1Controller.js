define("userCopyflxDevicesSegment1Controller", {
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
define("CopyflxDevicesSegment1ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Label_a7453581bbd8440fb7b3eb15d9287a9a: function AS_Label_a7453581bbd8440fb7b3eb15d9287a9a(eventobject, x, y, context) {
        var self = this;
        return self.onEditTouchEnd.call(this, eventobject);
    },
    AS_Button_ff8890cdccb844069013b08a490a020a: function AS_Button_ff8890cdccb844069013b08a490a020a(eventobject, context) {
        var self = this;
        this.executeOnParent("changeDeviceStatusOnClick", {
            row: eventobject.rowContext.rowIndex,
            section: eventobject.rowContext.sectionIndex
        });
    },
    AS_Image_f0acb80737ed494c9c720d0eea74c216: function AS_Image_f0acb80737ed494c9c720d0eea74c216(eventobject, x, y, context) {
        var self = this;
        return self.onCancelTouchEnd.call(this, eventobject);
    },
    AS_Image_aed1033be59e4401b52395fdf60ae3d0: function AS_Image_aed1033be59e4401b52395fdf60ae3d0(eventobject, x, y, context) {
        var self = this;
        return self.onEditOkTouchEnd.call(this, eventobject);
    }
});
define("CopyflxDevicesSegment1Controller", ["userCopyflxDevicesSegment1Controller", "CopyflxDevicesSegment1ControllerActions"], function() {
    var controller = require("userCopyflxDevicesSegment1Controller");
    var controllerActions = ["CopyflxDevicesSegment1ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
