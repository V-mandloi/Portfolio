var v1 = gsap.timeline();

gsap.to(".about", {
  x: 1300,
  scrollTrigger: {
    trigger: ".about",
    scrub: 2,
    // markers: true,
    start: "top 90%",
    end: "top",
  },
});

gsap.from(".para-animation, .visiblee", {
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#about",
    // markers: true,
    pin: true,
    scrub: true,
  },
});

gsap.to(".blink-dash", {
  opacity: 0,
  repeat: -1,
  repeatDelay: 0.8,
});
