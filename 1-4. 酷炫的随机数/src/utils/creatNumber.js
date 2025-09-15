import isPrime from "./isPrime";
export default class CreateNumber {
    constructor(duration=500) {
        this.duration = duration;
        this.number = 1;
        this.onNumberCreated = null;//当一个数字产生的时候，调用这个函数
        this.timer = null;
    }

    start() {
      this.timer = setInterval(() => {
           this.onNumberCreated && this.onNumberCreated(this.number, isPrime(this.number));
           this.number++;
       }, this.duration);
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
}
