// document.write("java link OK");
const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-list");

  burger.addEventListener("click", () => {
    // show/hide main-nav
    nav.classList.toggle("slideNav");

    // burger effect
    burger.classList.toggle("animate");
  });

  nav.addEventListener("click", () => {
    // hide main-nav
    nav.classList.remove("slideNav");

    // remove burger effect
    burger.classList.remove("animate");
  });
};

navSlide();

// **********************************************************************FADE-IN
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -80px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
    } else {
      entry.target.classList.remove("appear");
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
//**********************************************************************FADE-IN

//**********************************************************************SLIDE-IN
const sliders = document.querySelectorAll(".slide-in");

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

//**********************************************************************SLIDE-IN
