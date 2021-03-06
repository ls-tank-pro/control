class User {
    constructor() {
        this.subers = [];
        this.init({});
    }
    
    init(user) {
        this._id = user.Id || 0;
        this.nickname = user.Nickname || 0;
        this.diamond = user.Diamond || 0;
        this.kill = user.Kill || 0;
        this.dead = user.Dead || 0;
        this.tankbody = user.TankBody || 0;
        this.tankhead = user.TankHead || 0;
        this.tankwheel = user.TankWheel || 0;
    }
    
    get capacity() {
        return (this.tankbody + this.tankhead + this.tankwheel) * 500;
    }
    
    getModifyData() {
        return {
            diamond: this.diamond,
            kill: this.kill,
            dead: this.dead,
            tankbody: this.tankbody,
            tankhead: this.tankhead,
            tankwheel: this.tankwheel
        }
    }
    
    pub() {
        var self = this;
        this.subers.forEach(function(suber) {
            suber(self.getModifyData());
        });
    }
    
    sub(suber) {
        this.subers.push(suber);
    }
    
    setState(data) {
        Object.assign(this, data);
        this.pub();
    }
}

module.exports = new User();