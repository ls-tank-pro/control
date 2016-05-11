var data = require('equipData');
var Api = require('api');
var User = require('user');

cc.Class({
    extends: cc.Component,

    properties: {
        items: {
            default: [],
            type: cc.SpriteFrame
        },
        now: {
            default: null,
            type: cc.Sprite
        },
        next: {
            default: null,
            type: cc.Sprite
        },
        desc: {
            default: null,
            type: cc.Label
        },
        diamond: {
            default: null,
            type: cc.Label
        },
        type: '',
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
        this.data = data[this.type];
    },
    
    
    updateData: function(data) {
        this.level = data[this.type];
        
        this.desc.string = this.data[this.level + 1].desc;
        this.diamond.string = this.data[this.level + 1].cost;
        this.now.spriteFrame = this.items[this.level];
        this.next.spriteFrame = this.items[this.level + 1];
    },
    
    upgradeLevel: function() {
        if (User.diamond - (+this.diamond.string) < 0) {
            this.modal.show('你的钻石不够~');
            return;
        }
        
        if (this.level === 5) {
            this.modal.show('你已经足够牛逼了~');
            return;
        }
        
        
        this.loading.show();
        Api.update({
            [this.type]: this.level + 1,
            diamond: User.diamond - (+this.diamond.string)
        }).then(data => {
            setTimeout(() => {
                this.loading.hide();
                User.setState({
                    [this.type]: this.level + 1,
                    diamond: User.diamond - (+this.diamond.string)
                });
            }, 1000);
        });
    }

});
