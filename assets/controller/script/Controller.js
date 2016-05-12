var cloudAction = cc.fadeOut(1.0);
var Socket = require('socket');

function throttle(fn, threshhold) {
    var last;
    var timer;

    threshhold || (threshhold = 500);

    return function () {
        var context = this;
        var args = arguments;
        var now = +new Date();

        if (last && now < last + threshhold) {
            clearTimeout(timer);
        } else {
            last = now;
            fn.apply(context, args);
        }
    }
}

cc.Class({
    extends: cc.Component,

    properties: {
        direct: {
            default: null,
            type: cc.Node
        },
        fire: {
            default: null,
            type: cc.Node
        },
        cloudMask: {
            default: null,
            type: cc.Sprite
        }
    },

    onLoad: function() {
        Socket.connect();
        
        this.cloudMask.node.runAction(cloudAction);
    },
    
    onDestroy: function() {
        Socket.disconnect();
    },
    
    sendDirection: function(direction) {
        Socket.emit('c-direction', {
            direction: direction 
        });
    },
    
    sendFire: throttle(function() {
        Socket.emit('c-fire', {
            fire: 'fire' 
        });
    }),
    
    toMain: function() {
        cc.director.loadScene('Main');
    }
});
