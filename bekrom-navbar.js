function myMenuBox(){
  var x = document.getElementById("menudiv");
  if (x.style.display == "block") {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

var header = document.querySelector("#galaxy-navbar");
var links = document.querySelectorAll(".link");
var sections = document.querySelectorAll(".sections");

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;

  var current = "start";
  sections.forEach((section) =>{
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop-60) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((item) =>{
    item.classList.remove("active");
    if (item.href.includes(current)) {
      item.classList.add("active");
    }
    else{
      item.classList.remove("active");
    }
  });
}

//location.reload();
const indexPage = document.getElementById("indexPage");

indexPage.addEventListener("click", () => {
    location.reload();
});
/*
document.addEventListener("keydown", function(e) {
  if(e.ctrlKey || e.which == 123) {
    e.preventDefault();
  }
});

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

*/
