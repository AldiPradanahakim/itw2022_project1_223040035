let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector("#header");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

let i = 0;
const text = document.getElementById("text");
const typing = "From Pasundan University Students";

function type() {
  if (i < typing.length) {
    text.innerHTML += typing.charAt(i);
    i++;
    setTimeout(type, 250);
  } else {
    setTimeout(erase, 5000);
  }
}

function erase() {
  if (i > 0) {
    text.innerHTML = text.innerHTML.slice(0, -1);
    i--;
    setTimeout(erase, 250);
  } else {
    setTimeout(type, 5000);
  }
}

setInterval(type, 5000);
