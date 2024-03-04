var v1 = gsap.timeline();

v1.to(".about", {
  x: 1300,
  scrollTrigger: {
    trigger: ".about",
    scrub: 2,
    // markers: true,
    start: "top 90%",
    end: "top",
  },
});

v1.from(".para-animation, .visiblee", {
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#about",
    // markers: true,
    pin: true,
    scrub: true,
  },
});

v1.to(".background-td", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#about",
    // scroller: "body",
    markers: true,
    // pin: true,
    // start: "top 80%",
    // end: "top",
    scrub: true,
  },
});

gsap.to(".blink-dash", {
  opacity: 0,
  repeat: -1,
  repeatDelay: 0.8,
});
