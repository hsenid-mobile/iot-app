var WebSocket = require('ws');
var ws = new WebSocket('ws://api.hsenidmobile.com:9008/iot/connect?token=<YOUR_TOKEN>');

ws.on('open', function open() {
    console.log("connected!")
});

ws.on('message', function (data, flags) {
    var message = JSON.parse(data);

    if (message.type == 'boot') {
        ws.send(
            JSON.stringify({
                id: "123456",
                type: "command",
                content: "while 1 {if(a0 < 200){print 'level=' a0;}; snooze(1000); };",
                device: message.device
            })
        );
    }

    console.log(data);

});
