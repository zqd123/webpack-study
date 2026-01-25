const png = require('./assets/snail.jpg').default;
console.log(png);

// if(Math.random() > 0.5) {
  const img = document.createElement('img');
  img.src = png;
  document.body.appendChild(img); 
// }