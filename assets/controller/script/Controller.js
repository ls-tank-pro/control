var cloudAction = cc.fadeOut(1.0);
var Socket = require('socket');
var User = require('user');

var resultAction = {
    show: cc.moveTo(0.5, cc.p(0, 0)).easing(cc.easeIn(3.0)),
    hide: cc.moveTo(0.5, cc.p(0, 720)).easing(cc.easeIn(3.0))
};

function throttle(fn, threshhold) {
    var last;
    var timer;

    threshhold || (threshhold = 750);

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
        },
        result: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function() {
        Socket.connect();
        this.cloudMask.node.runAction(cloudAction);
        
        Socket.on('c-score', event => console.log(event));
        Socket.on('c-boom', event => this.onBoom());
    },
    
    onBoom: function() {
        this.result.runAction(resultAction.show);
    },
    
    onScore: function() {
        // todo  
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
            fire: User.tankhead 
        });
    }),
    
    toMain: function() {
        cc.director.loadScene('Main');
    },
    
    toEquip: function() {
        cc.director.loadScene('Equip');
    },
    
    toFight: function() {
        Socket.emit('c-next');
        this.result.runAction(resultAction.hide);
    }
});
