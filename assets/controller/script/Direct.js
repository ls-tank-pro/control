cc.Class({
    extends: cc.Component,

    properties: {
        follower: {
            default: null,
            type: cc.Node
        },
        direction: 4
    },

    onLoad: function() {
        this.setTouchControl();
    },
    
    setTouchControl: function() {
        var self = this;
        this.touchControl = cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: self.onTouchBegan.bind(self),
            onTouchMoved: self.onTouchMoved.bind(self),
            onTouchEnded: self.onTouchEnded.bind(self)
        }, self.node);
    },
    
    unsetTouchControl: function() {
        
    },
    
    setSendDirection: function() {
        
    },
    
    _getAngle: function(pos) {
        this.angle = Math.atan2(pos.y, pos.x) / 3.1415926 * 180;
        return this.angle;
    },
    
    _getRadians: function(pos) {
      this.radians = Math.atan2(pos.y, pos.x);
      return this.radians;
    },
    
    _getLength: function(pos) {
        return Math.sqrt(pos.x * pos.x + pos.y * pos.y);
    },
    
    onTouchBegan: function(touch, event) {
        var target = this.follower;
        var touchLoc = touch.getLocation();
        var locInNode = this.node.convertToNodeSpaceAR(touchLoc);
        var tmpLength = this._getLength(locInNode);
        return tmpLength < 103;
    },
    
    onTouchMoved: function(touch, event) {
        var target = this.follower;
        var touchLoc = touch.getLocation();
        var locInNode = this.node.convertToNodeSpaceAR(touchLoc);
        
        this._getAngle(locInNode);
        this._getRadians(locInNode);
        
        var tmpLength = this._getLength(locInNode);
        
        if (tmpLength < 103) {
            target.setPosition(locInNode);
        } else {
            var x = Math.cos(this.radians) * 103;
            var y = Math.sin(this.radians) * 103;
            target.setPosition(cc.p(x, y));
        }
        
    },
    
    onTouchEnded: function(touch, event) {
        var target = this.follower;
        target.setPosition({x: 0, y: 0});
    },
    
});
