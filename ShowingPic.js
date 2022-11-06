var imgs = ["./imgs/1.jpg", "./imgs/2.jpg", "./imgs/3.jpg", "./imgs/4.jpg"]
var ind = 0

function next() {
  if (ind <= 2) {
    ind++
    document.images[0].src = imgs[ind]
  }
}

function Previous() {
  console.log(ind)
  if (ind >= 1) {
    ind--
    document.images[0].src = imgs[ind]
  }
}

var h

function SlideShow() {
  i = 0
  h = setInterval(() => {

    document.images[0].src = imgs[i]
    if (i == 3) {
      i = -1
    }
    i++
  }, 1000);
}

function stop() {
  clearInterval(h)
}