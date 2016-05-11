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
        }
    },

    onLoad: function() {
        this.diamondLabel.string = this.diamond + ' 钻石';
        this.costLabel.string = this.cost;
    }
});
