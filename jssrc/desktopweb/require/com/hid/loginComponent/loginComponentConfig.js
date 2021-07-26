define(function() {
    return {
        "properties": [{
            "name": "MFA",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["setContext", "resetUI", "getUserName", "logoutOnClick"],
        "events": ["onSuccessCallback", "onFailureCallback", "dismissLoading", "showLoading", "changeContext"]
    }
});