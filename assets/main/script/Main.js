var cloudAction = cc.fadeOut(1.0);

cc.Class({
    extends: cc.Component,

    properties: {
        cloudMask: {
            default: null,
            type: cc.Sprite
        }
    },

    onLoad: function() {
        this.cloudMask.node.runAction(cloudAction);
    },

});
