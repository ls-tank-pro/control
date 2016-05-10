var User = require('user');

var cloudAction = cc.fadeOut(1.0);

cc.Class({
    extends: cc.Component,

    properties: {
        cloudMask: {
            default: null,
            type: cc.Sprite
        },
        nickname: {
            default: null,
            type: cc.Label
        },
        capacity: {
            default: null,
            type: cc.Label
        }
    },

    onLoad: function() {
        this.init();
        this.cloudMask.node.runAction(cloudAction);
    },
    
    init: function() {
        this.nickname.string = User.nickname;
        this.capacity.string = User.capacity;
    },
    
    toEquip: function() {
        cc.director.loadScene('Equip');
    }
});
