import creatNumber from "../utils/creatNumber";
import appendNumber from "./appendNumber";
let isStart = false;

const numberGenerator = new creatNumber();
numberGenerator.onNumberCreated = (number, isPrime) => {
    appendNumber(number, isPrime);
};

window.addEventListener('click', function () {
    if (isStart) {
        isStart = false;
        numberGenerator.start()
    }else {
        isStart = true;
        numberGenerator.stop();
    }
});