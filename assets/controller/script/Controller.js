var cloudAction = cc.fadeOut(1.0);

cc.Class({
    extends: cc.Component,

    properties: {
        direct: {
            default: null,
            type: cc.Node
        },
        fire: {
            default: null,
            type: cc.Node
        },
        cloudMask: {
            default: null,
            type: cc.Sprite
        }
    },

    onLoad: function() {
        this.cloudMask.node.runAction(cloudAction);
    },
    
    toMain: function() {
        cc.director.loadScene('Main');
    }
});
