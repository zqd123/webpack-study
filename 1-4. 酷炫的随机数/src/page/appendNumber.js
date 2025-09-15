import radomColor,{getRandomNumber} from "../utils/radomColor";
const divContainer = document.getElementById('divContainer');
const divCenter = document.getElementById('divCenter');
export default function (num,isPrime) {
    const numberElement = document.createElement('span');
    if(isPrime){
        const color =radomColor()
        numberElement.style.color = color;
        createCenterPrimeNumber(num,color);
    }
    numberElement.textContent = num;
    divContainer.appendChild(numberElement);
    createCenterNumber(num);
}

function createCenterNumber(num) {
    divCenter.innerText = num;
}
function createCenterPrimeNumber(num,color) {
    const primeElement = document.createElement('div');
    primeElement.innerText = num;
    primeElement.className = 'center';
    primeElement.style.color = color;
    document.body.appendChild(primeElement);
    getComputedStyle(primeElement).left;
    primeElement.style.transform = `translate(${getRandomNumber(200,-200)}px, ${getRandomNumber(200,-200)}px)`;
    primeElement.style.opacity = 0;
    setTimeout(() => {
        document.body.removeChild(primeElement);
    }, 1000);
}