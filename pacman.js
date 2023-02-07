var pos = 0;
var pageWidth = window.innerWidth;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];


var direction = 0;
var focus = 0;
function Run2() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  let edgeLimit = pageWidth - imgWidth;
  if (pos >= edgeLimit) {
    direction = 1;
  } else if (pos < 0) {
    direction = 0;
  }
  return direction;
}
function Run() {
setInterval(Run2, 300);
}
module.exports = checkPageBounds;