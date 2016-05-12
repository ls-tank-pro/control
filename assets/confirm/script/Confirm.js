var confirmAction = {
    show: cc.moveTo(0.5, cc.p(0, 0)).easing(cc.easeIn(3.0)),
    hide: cc.moveTo(0.5, cc.p(0, 720)).easing(cc.easeIn(3.0))
};

cc.Class({
    extends: cc.Component,

    properties: {
        desc: {
            default: null,
            type: cc.Label
        }
    },
    
    show: function(data) {
        this.desc.string = data.desc;
        this.confirmCallback = data.confirmCallback;
        this.cancelCallback = data.cancelCallback;
        
        this.node.runAction(confirmAction.show);
    },
    
    hide: function() {
        this.node.runAction(confirmAction.hide);
    },
    
    cancel: function() {
        this.hide();
    },
    
    confirm: function() {
        this.confirmCallback();
        this.hide();
    },
    
    onLoad: function() {

    },
});
