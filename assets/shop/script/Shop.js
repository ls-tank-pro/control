var User = require('user');

cc.Class({
    extends: cc.Component,

    properties: {
        body: {
            default: null,
            type: cc.Node
        },
        nickname: {
            default: null,
            type: cc.Label
        },
        diamond: {
            default: null,
            type: cc.Label
        },
        confirm: {
            default: null,
            type: cc.Component
        },
        loading: {
            default: null,
            type: cc.Component
        },
        modal: {
            default: null,
            type: cc.Component
        }
    },

    onLoad: function() {
        this.initBaseData();
        this.body.runAction(cc.moveTo(0.5, 0, 0).easing(cc.easeIn(3.0)));
        
        User.sub(this.updateData.bind(this));
    },
    
    initBaseData: function() {
        this.nickname.string = User.nickname;
        this.diamond.string = User.diamond;
    },
    
    updateData: function(data) {
        if (!this.diamond) return;
        this.diamond.string = data.diamond;
    },
    
    toBack: function() {
        cc.director.loadScene('Equip');
    }
    
});
