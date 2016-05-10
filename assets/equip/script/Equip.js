var User = require('user');

cc.Class({
    extends: cc.Component,

    properties: {
        bottom: {
            default: null,
            type: cc.Node
        },
        body: {
            default: null,
            type: cc.Node
        },
        nickname: {
            default: null,
            type: cc.Label
        },
        kill: {
            default: null,
            type: cc.Label
        },
        dead: {
            default: null,
            type: cc.Label
        },
        diamond: {
            default: null,
            type: cc.Label
        },
        head: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function() {
        this.initBaseData();
        this.initComponent();
        this.uiShow();
    },
    
    uiShow: function() {
        var self = this;
        this.bottom.runAction(cc.moveTo(0.5, 0, 0).easing(cc.easeIn(3.0)));
        setTimeout(function() {
            self.body.runAction(cc.moveTo(0.5, 115, 50).easing(cc.easeIn(3.0)));    
        }, 250);
    },
    
    initBaseData: function() {
        this.nickname.string = User.nickname;
        this.kill.string = User.kill;
        this.dead.string = User.dead;
        this.diamond.string = User.diamond;
    },
    
    initComponent: function() {
        this.headComponent = this.head.getComponent('EquipItem');
    },
    
    
    
    updateData: function(data) {
        console.log(data);
    }
});
