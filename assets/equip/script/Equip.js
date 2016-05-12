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
        thead: {
            default: null,
            type: cc.Node
        },
        tbody: {
            default: null,
            type: cc.Node
        },
        twheel: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function() {
        this.initBaseData();
        this.initComponent();
        this.updateData(User.getModifyData());
        this.uiShow();
        
        User.sub(this.updateData.bind(this));
    },
    
    
    toShop: function() {
        cc.director.loadScene('Shop');  
    },
    
    toMain: function() {
        cc.director.loadScene('Main');  
    },
    
    uiShow: function() {
        var self = this;
        this.bottom.runAction(cc.moveTo(0.5, 0, 0).easing(cc.easeIn(3.0)));
        setTimeout(function() {
            self.body.runAction(cc.moveTo(0.5, 115, 55).easing(cc.easeIn(3.0)));    
        }, 250);
    },
    
    initBaseData: function() {
        this.nickname.string = User.nickname;
        this.kill.string = User.kill;
        this.dead.string = User.dead;
        this.diamond.string = User.diamond;
    },
    
    initComponent: function() {
        this.headComponent = this.thead.getComponent('EquipItem');
        this.bodyComponent = this.tbody.getComponent('EquipItem');
        this.wheelComponent = this.twheel.getComponent('EquipItem');
    },
    
    updateData: function(data) {
        if (!this.headComponent) return;
        this.headComponent.updateData(data);
        this.bodyComponent.updateData(data);
        this.wheelComponent.updateData(data);
        this.diamond.string = data.diamond;
    }
});
