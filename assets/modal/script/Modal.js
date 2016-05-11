var modalAction = {
    show: cc.moveTo(0.5, cc.p(0, 0)).easing(cc.easeIn(3.0)),
    hide: cc.moveTo(0.5, cc.p(0, 720)).easing(cc.easeIn(3.0))
};

cc.Class({
    extends: cc.Component,

    properties: {
        desc: {
            default: null,
            type: cc.Label
        },
        btn: {
            default: null,
            type: cc.Button
        }
    },
    
    show: function(desc) {
        this.desc.string = desc;
        this.node.runAction(modalAction.show);
    },
    
    hide: function() {
        this.node.runAction(modalAction.hide);
    },
    
    onLoad: function() {
    },
});
