let lastScroll = 0;
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll < lastScroll) {
    // Scrolling up
    hero.classList.add("scroll-up");
  } else {
    // Scrolling down
    hero.classList.remove("scroll-up");
  }

  lastScroll = currentScroll;
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
