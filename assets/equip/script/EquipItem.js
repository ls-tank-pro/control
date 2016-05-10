var data = require('equipData');

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
        type: ''
    },

    onLoad: function() {
        this.data = data[this.type];
    },
    
    updateData: function(level) {
        console.log(level);
    }

});
