var Api = require('api');
var User = require('user');

cc.Class({
    extends: cc.Component,

    properties: {
        diamond: {
            default: 0,
            type: cc.Integer
        },
        cost: {
            default: 0,
            type: cc.Integer
        },
        diamondLabel: {
            default: null,
            type: cc.Label
        },
        costLabel: {
            default: null,
            type: cc.Label
        },
        shop: {
            default: null,
            type: cc.Component
        }
    },

    onLoad: function() {
        this.diamondLabel.string = this.diamond + ' 钻石';
        this.costLabel.string = this.cost;
    },
    
    pay: function() {
        this.shop.loading.show();
        Api.update({
            diamond: User.diamond + this.diamond
        }).then(data => {
            setTimeout(() => {
                this.shop.loading.hide();
                this.shop.modal.show('充值成功');
                User.setState({
                    diamond: User.diamond + this.diamond
                });
            }, 1000);
        })
    },
    
    clickHandler: function() {
        this.shop.confirm.show({
            desc: '你要支付' + this.cost + '元购买' + this.diamond + '钻石吗？',
            confirmCallback: this.pay.bind(this)
        });
    }
});
