cc.Class({
    extends: cc.Component,

    properties: {
        controller: {
            default: null,
            type: cc.Component
        }
    },
    
    emitFire: function() {
        this.controller.sendFire();  
    },

    onLoad: function() {

    }
});
