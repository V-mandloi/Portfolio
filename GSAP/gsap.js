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
// tl.from(".social-log0", {
//     x: -200,
//     ease: "power2.out",
//     stagger: 0.1
// })

tl.to("#scrollButton", {
  y: 30,
  ease: "power1.inOut",
  duration: 3,
  repeat: -1,
  repeatDelay: 2,
  opacity: 0.2,
});

// timeline 1 end

// var t2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".about-page-size",
//     scroller: "body",
//     // markers: true,
//     start: "top 80%",
//     scrub: 1,
//     end: "top 40%",
//   },
// });
// t2.to(
//   ".about-page-size",
//   {
//     scale: 1,
//   },
//   "about"
// );
// t2.to("background-3d", {});
// t2.to(".about-page-size::before", {
//     scale:0.9,
// }, "about")

//timeline 2 ends

// var t3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#home",
//     scroller: "body",
//     pin: true,
//     // markers: true,
//     // start: "top top",
//     // end: "top 30%",
//   },
// });
// // home page animation ends

// t3.to(
//   "#about",
//   {
//     y: -712,
//   },
//   "S"
// );

// t3.to(".about-page-size", {
//     y: -712,
//     scale:1,
//     scrollTrigger: {
//         trigger: ".about-page-size",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         scrub: true,
//         end: "top 20%"
//     }
// }, "S")

// t3.to(
//   "#skills",
//   {
//     y: -712,
//   },
//   "S"
// );

// t3.to(
//   "#projects",
//   {
//     y: -712,
//   },
//   "S"
// );

// t3.to(
//   "#contact",
//   {
//     y: -712,
//   },
//   "S"
// );

// pS1.to("#skills", {
//     y : -712,

//     scrollTrigger: {
//         trigger: "#about",
//         pin: true,
//         markers: true,
//         // start: "top 80%",
//         // end: "top 30%",
//     }
// })
// pS1.to("#projects", {
//     y : -712,

//     scrollTrigger: {
//         trigger: "#skills",
//         pin: true,
//         markers: true,
//         // start: "top 80%",
//         // end: "top 30%",
//     }
// })
// pS1.to("#contact", {
//     y : -712,

//     scrollTrigger: {
//         trigger: "#projects",
//         pin: true,
//         markers: true,
//         // start: "top 80%",
//         // end: "top 30%",
//     }
// })

//hhhhhhhhhhhhhhhhhhhh
// pS1.from(".first", {
//     x: -200,

// }, "pS")
// pS1.from(".second", {
//     x: 200,

// }, "pS")

// opacity

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
