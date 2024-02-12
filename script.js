let target = document.querySelector('#block');
let xCoordsWrapper = document.querySelector('#x-coords');
let yCoordsWrapper = document.querySelector('#y-coords');
//functions
function updateToDefault() {
    target.style.transition = 'all 350ms ease';
    xCoordsWrapper.innerHTML = 0;
    yCoordsWrapper.innerHTML = 0;
    target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
}
function updateCoords(e) {
    let blockLeft = target.offsetLeft;
    let blockWidth = target.offsetWidth;
    let blockHeight = target.offsetHeight;
    let blockTop = target.offsetTop;
    let x = e.pageX - blockLeft - blockWidth / 2;
    let y = e.pageY - blockTop - blockHeight / 2;
    y *= -1;
    target.style.transition = 'all 100ms ease';
    target.style.transform = 'perspective(1000px) rotateY(' + x * 0.075 + 'deg)' + 'rotateX(' + y * 0.075 + 'deg) scale(1.1)';
    xCoordsWrapper.innerHTML = x;
    yCoordsWrapper.innerHTML = y;
}
function holdTouchEvent(e) {
  let blockLeft = target.offsetLeft;
  let blockWidth = target.offsetWidth;
  let blockHeight = target.offsetHeight;
  let blockTop = target.offsetTop;
  let x = (e.changedTouches[0].pageX).toFixed(0) - blockLeft - blockWidth / 2;
  let y = (e.changedTouches[0].pageY).toFixed(0) - blockTop - blockHeight / 2;
  y *= -1;
  target.style.transition = 'all 100ms ease';
  target.style.transform = 'perspective(1000px) rotateY(' + x * 0.075 + 'deg)' + 'rotateX(' + y * 0.075 + 'deg) scale(1.1)';
  xCoordsWrapper.innerHTML = x;
  yCoordsWrapper.innerHTML = y;
}
//listeners
target.addEventListener('mousemove', updateCoords, false);
target.addEventListener('touchmove', holdTouchEvent, false);
target.addEventListener('touchend', updateToDefault, false);
target.addEventListener('mouseleave', updateToDefault, false);
target.addEventListener('mouseenter', function() { hoverState(true) }, false);
target.addEventListener('mouseleave', function() { hoverState(false) }, false);

target.addEventListener('click', function() {
  window.location.href = 'https://google.com'; // Replace 'https://example.com' with your desired URL
});