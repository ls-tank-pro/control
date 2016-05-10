var Api = require('api');
var User = require('user');

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
        },
        registerSubmit: {
            default: null,
            type: cc.Button
        },
        registerUsername: {
            default: null,
            type: cc.EditBox
        },
        registerPassword: {
            default: null,
            type: cc.EditBox
        },
        registerNickName: {
            default: null,
            type: cc.EditBox
        },
        loading: {
            default: null,
            type: cc.Component
        },
        loginUsername: {
            default: null,
            type: cc.EditBox
        },
        loginPassword: {
            default: null,
            type: cc.EditBox
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
    
    registerSubmitHandler: function() {
        var data = {
            username: this.registerUsername.string,
            password: this.registerPassword.string,
            nickname: this.registerNickName.string
        };
        
        this.loading.show();
        Api.register(data).then(data => {
            setTimeout(() => {
                this.loading.hide();
                this.toMain();
            }, 1000);
        });
    },
    
    loginSubmitHandler: function() {
        var data = {
            username: this.loginUsername.string,
            password: this.loginPassword.string
        };
        
        this.loading.show();
        Api.login(data).then(data => {
            setTimeout(() => {
                this.loading.hide();
                User.init(data.data);
                this.toMain();
            }, 1000);
        }, data => {
            setTimeout(() => {
                this.loading.hide();
                alert(data.data); // todo
            }, 1000);
        });
    },
    
    toMain: function() {
        cc.director.loadScene('Main');  
    },
    
    onLoad: function() {
        
    }
});
