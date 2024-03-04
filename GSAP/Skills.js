var v1 = gsap.timeline();

v1.to(".skills", {
  x: -1350,
  scrollTrigger: {
    trigger: ".skills",
    scrub: 2,
    // markers: true,
    start: "top 90%",
    end: "top",
  },
});
