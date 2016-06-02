var spin = cc.repeatForever(
    cc.rotateBy(0.5, 360)  
);

cc.Class({
    extends: cc.Component,

    properties: {
        spin: {
            default: null,
            type: cc.Node
        },
        desc: {
            default: null,
            type: cc.Label
        }
    },
    
    show: function() {
        this.spin.runAction(spin);
        this.node.setContentSize(1280, 720);
    },
    
    hide: function() {
        this.spin.stopAllActions();
        this.node.setContentSize(0, 0)
    }
});
