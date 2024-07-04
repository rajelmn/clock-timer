class Clock {
    
    constructor({template}, timer) {
        this.template = template;
        this.timer = timer;
    }; 

    render() {
        let date = new Date();

        let minutes = date.getMinutes();
        minutes < 10 ? minutes = '0'+ minutes: minutes;

        let hours = date.getHours(); 
        hours < 10 ? hours = '0' + hours: hours;

        let secs = date.getSeconds();
        secs < 10 ? secs = '0' + secs: secs;

        let output = this.template.replace('h', hours)
                                  .replace('m', minutes)
                                  .replace('s', secs);
        console.log(output);
    };

    start() {
        this.render();
        this.timer =  setInterval(this.render.bind(this), 1000)
    };

    stop() {
        clearInterval(this.timer)
    }

}
let h1 = document.querySelector('h1')
let clock = new Clock({template: 'h:m:s'}) ;
clock.start()