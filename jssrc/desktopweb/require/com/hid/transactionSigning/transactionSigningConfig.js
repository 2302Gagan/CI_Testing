define(function() {
    return {
        "properties": [{
            "name": "username",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "tds",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["initiate", "changeTSMode"],
        "events": ["showLoading", "dismissLoading", "onTSSuccess"]
    }
});