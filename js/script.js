function setStatus(e) {
  if (document.querySelector(".navlist a.active")) {
    document.querySelector(".navlist a.active").classList.remove("active");
  }
  e.target.className = "active";
  if (e.srcElement.id) {
    document.querySelector(`.${e.srcElement.id}`).scrollIntoView({ 
      block: "start",
      behavior: "smooth"
    });
  }
}

const darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("color");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("color");
  }
}

const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
}

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navList.classList.remove("open");

  if ($(window).scrollTop() > 50) {
    $("header").addClass("active");
    $(".up-arrow").addClass("o-1");
    $(".up-arrow").removeClass("o-0");
  } else {   
    $("header").removeClass("active");
    $(".up-arrow").addClass("o-0");
    $(".up-arrow").removeClass("o-1");
  }
}

const scrollReveal = ScrollReveal({
  distance: "70px",
  duration: 2700,
  reset: true
});

scrollReveal.reveal(".hero-text", {
  delay: 200,
  origin: "bottom"
});

scrollReveal.reveal(".hero-img", {
  delay: 350,
  origin: "top"
});

scrollReveal.reveal(".down-arrow", {
  delay: 450,
  origin: "right"
});

scrollReveal.reveal(".up-arrow", {
  delay: 450,
  origin: "bottom"
});

scrollReveal.reveal(".escritorio-text h1", {
  delay: 50,
  origin: "top"
});

scrollReveal.reveal(".escritorio-text p", {
  delay: 50,
  origin: "bottom"
});

scrollReveal.reveal(".escritorio-img", {
  delay: 150,
  origin: "top"
});

scrollReveal.reveal(".card", {
  delay: 150,
  origin: "bottom"
});

scrollReveal.reveal(".equipe-content", {
  delay: 150,
  origin: "bottom"
});

const arrowDown = document.querySelector(".down-arrow");
arrowDown.onclick = () => {
  document.querySelector(".escritorio").scrollIntoView({ 
    block: "start", 
    behavior: "smooth"
  });
}

const arrowUp= document.querySelector(".up-arrow");
arrowUp.onclick = () => {
  document.querySelector(".hero").scrollIntoView({ 
    block: "start", 
    behavior: "smooth"
  });
}

const sections = document.querySelectorAll("section[class]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  if (scrollY > 0) {
    document.querySelector("header").style.padding = "0 9%";
  } else {
    document.querySelector("header").style.padding = "27px 9%";
  }
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionClass = current.getAttribute("class");
    
    if (!["copyright"].includes(sectionClass)) {
      if (sectionClass == "escritorio") {
        document.querySelectorAll(".item").forEach(v => v.classList.add("item-fadeIn"));
      }
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(".navlist a[href*=" + sectionClass + "]").classList.add("active");
      } else {
        document.querySelector(".navlist a[href*=" + sectionClass + "]").classList.remove("active");
      }
    }
  });
}