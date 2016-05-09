var loginBoxAction = {
    show: cc.moveTo(0.5, cc.p(0, -165)).easing(cc.easeIn(3.0)),
    hide: cc.moveTo(0.5, cc.p(0, -700)).easing(cc.easeIn(3.0))
};

var registerTrigger = {
    show: cc.moveTo(0.5, cc.p(557, 278)).easing(cc.easeIn(3.0)),
    hide: cc.moveTo(0.5, cc.p(557, 445)).easing(cc.easeIn(3.0)),
};

var registerBox = {
    show: cc.moveTo(0.5, cc.p(0, 0)).easing(cc.easeIn(3.0)),
    hide: cc.moveTo(0.5, cc.p(0, -700)).easing(cc.easeIn(3.0))
};

var backTrigger = {
    show: cc.moveTo(0.5, cc.p(557, 278)).easing(cc.easeIn(3.0)),
    hide: cc.moveTo(0.5, cc.p(557, 445)).easing(cc.easeIn(3.0))
};

cc.Class({
    extends: cc.Component,

    properties: {
        loginBox: {
            default: null,
            type: cc.Node
        },
        registerTrigger: {
            default: null,
            type: cc.Node
        },
        registerBox: {
            default: null,
            type: cc.Node
        },
        backTrigger: {
            default: null,
            type: cc.Node
        }
    },
    
    registerTriggerHandler: function() {
        this.loginBox.runAction(loginBoxAction.hide);
        this.registerTrigger.runAction(registerTrigger.hide);
        this.registerBox.runAction(registerBox.show);
        this.backTrigger.runAction(backTrigger.show);
    },
    
    backTriggerHandler: function() {
        this.loginBox.runAction(loginBoxAction.show);
        this.registerTrigger.runAction(registerTrigger.show);
        this.registerBox.runAction(registerBox.hide);
        this.backTrigger.runAction(backTrigger.hide);
    },
    
    onLoad: function() {
        
    }
});
