cc.Class({
    extends: cc.Component,

    properties: {
        body: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function() {
        this.body.runAction(cc.moveTo(0.5, 0, 0).easing(cc.easeIn(3.0)));
    }
    
});
