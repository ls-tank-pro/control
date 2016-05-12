var Sio = require('socket.io');
var User = require('user');

var Socket = (function() {
    var URI = '10.10.1.38:3000/tankControllers';
    var ws;
    
    var connect = function() {
        ws = Sio(URI + '?uid=' + User._id + '&head=' + User.tankhead + '&body=' + User.tankbody + '&wheel=' + User.tankwheel + '&nickname=' + User.nickname);
    };
    
    var disconnect = function() {
        ws.disconnect();
    };
    
    var on = function(eventName, callback) {
        ws.on(eventName, callback);  
    };
    
    var emit = function(eventName, eventObj) {
        ws.emit(eventName, {
            uid: User._id,
            data: eventObj
        });
    };
    
    return {
        connect: connect,
        disconnect: disconnect,
        on: on,
        emit: emit
    };
}());

module.exports = Socket;
