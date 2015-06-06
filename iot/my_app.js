var WebSocket = require('ws');
var ws = new WebSocket('ws://api.hsenidmobile.com:9008/iot/connect?token=<YOUR_TOKEN>');

ws.on('open', function open() {
    console.log("connected!")
});

ws.on('close', function close() {
    console.log('disconnected');
});

ws.on('message', function (data, flags) {
    var message = JSON.parse(data);

    if (message.type == 'boot') {
        ws.send(
            JSON.stringify({
                type: "command",
                content: "function schedule {if(a0 < 200){print 'level=' a0;};}",
                device: message.device
            })
        );
    }

    console.log(data);

});
