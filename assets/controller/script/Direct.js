cc.Class({
    extends: cc.Component,

    properties: {
        follower: {
            default: null,
            type: cc.Node
        },
        direction: 4,
        controller: {
            default: null,
            type: cc.Component
        }
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
        
        this.emitDirection(this.getDirection(tmpLength));
    },
    
    onTouchEnded: function(touch, event) {
        var target = this.follower;
        target.setPosition({x: 0, y: 0});
        
        this.emitDirection(4);
    },
    
    getDirection: function(length) {
        var direction;
        
        if (length <= 10) return 4;
        
        if (this.angle < 0) this.angle = this.angle + 360;
        
        if (this.angle >= 0 && this.angle <= 45 || this.angle > 315 && this.angle <= 360) { 
            direction = 1;
        } else if (this.angle > 45 && this.angle <= 135) {
            direction = 0;
        } else if (this.angle > 135 && this.angle <= 225) {
            direction = 3;
        } else if (this.angle > 225 && this.angle <= 315) {
            direction = 2;
        }
        
        return direction;
    },
    
    emitDirection: function(direction) {
        if (this.direction !== direction) {
            this.direction = direction;
            this.controller.sendDirection(direction);
        }
    }
    
});
