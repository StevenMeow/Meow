const btn = document.getElementById("dropdown");
const btn2 = document.getElementById("xeper");

function toggle() {
  nav.style.display = "flex";
  xeper.style.display = "block";
  dropdown.style.display = "none";
}
function toggle2() {
  nav.style.display = "none";
  xeper.style.display = "none";
  dropdown.style.display = "block";
}

btn2.addEventListener("click", toggle2);
btn.addEventListener("click", toggle);

/* change bg */

const season1 = document.getElementById("s1");
const season2 = document.getElementById("s2");
const season3 = document.getElementById("s3");

function sea1() {
  if (window.innerWidth <= 790) {
    document.body.style.backgroundImage = "url('../img/Part1Mobile.jpg')";
  } else {
    document.body.style.backgroundImage = "url('../img/Part1.jpg')";
  }
  seasa.style.display = "block";
  seasb.style.display = "none";
  seasc.style.display = "none";
}
function sea2() {
  if (window.innerWidth <= 790) {
    document.body.style.backgroundImage = "url('../img/Part2Mobile.jpg')";
  } else {
    document.body.style.backgroundImage = "url('../img/Part2.jpg')";
  }
  seasa.style.display = "none";
  seasb.style.display = "block";
  seasc.style.display = "none";
}
function sea3() {
  if (window.innerWidth <= 790) {
    document.body.style.backgroundImage = "url('../img/Part3Mobile.jpg')";
  } else {
    document.body.style.backgroundImage = "url('../img/Part3.jpg')";
  }
  seasa.style.display = "none";
  seasb.style.display = "none";
  seasc.style.display = "block";
}

season1.addEventListener("click", sea1);
season2.addEventListener("click", sea2);
season3.addEventListener("click", sea3);
