define(function() {
    return {
        "properties": [{
            "name": "MFA",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["resetUI", "getUserId"],
        "events": ["showLoading", "dismissLoading", "changeContext", "switchLogin", "passwordPolicy"]
    }
});