var tl = gsap.timeline();

tl.from(".home-video-size", {
  x: -1300,
  // opacity:0.1,
  ease: "power2.out",
  duration: 0.5,
  delay: 0,
}),
  tl.from(".navbar-logo", {
    y: -100,
    ease: "power2.out",
    stagger: 0.1,
  });
tl.from(".navbar-links", {
  y: -100,
  ease: "power2.out",
  stagger: 0.1,
});
tl.from(".home-content h5, h2, h3, a", {
  x: -750,
  ease: "power2.out",
  stagger: 0.1,
});

tl.to("#scrollButton", {
  y: 30,
  ease: "power1.inOut",
  duration: 3,
  repeat: -1,
  repeatDelay: 2,
  opacity: 0.2,
});

var v3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home-content",
    scroller: "body",
    scrub: true,
    // markers: true,
    start: "top 10%",
    end: "bottom 35%",
  },
});

v3.to(".home-content, .scroll-downs", {
  opacity: 0,
  scale: 0.5,
  // transform: translate(50% 50%),
});

// gsap.to("background-3d", {
//   opacity: 0,
//   scrollTrigger: {
//     trigger: "#about",
//     scroller: "body",
//     markers: true,
//     // start: "top 150%",
//     // end: "top 80%",
//   },
// });
