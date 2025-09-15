const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F3FF33",
    "#FF33A1"
];
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
export default function () {
    return colors[getRandomNumber(0, colors.length)];
}
