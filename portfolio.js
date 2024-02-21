const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar-links");
toggleButton.addEventListener("click", function () {
  for (var i = 0; i < navbarLinks.length; i++)
    navbarLinks[i].classList.toggle("active");
});

// hamburger button

// loader js starts

// const loaderContainer = document.querySelector(".loader-container");
// const pageContaint = document.querySelector("#home");

// window.addEventListener("load", () => {
//   loaderContainer.classList.add("hidden");
//   pageContaint.classList.add("visible");
// });

// loader js ends

// cursor js starts

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("evolut");

  setTimeout(() => {
    cursor.classList.remove("evolut");
  }, 500);
});

// cursor js ends

// smooth scroll js starts

var navMenuAnchorTags = document.querySelectorAll(".navbar a");
// console.log(navMenuAnchorTags);
let targetSection = null;
for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    targetSection = document.getElementById(targetSectionID);
    console.log(targetSection);

    // console.log(targetSection);
    var interval = setInterval(function () {
      var targetSectionCoordinates = targetSection.getBoundingClientRect();
      // console.log(targetSectionCoordinates);
      if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 11);
    }, 10);
  });
}

// smooth scroll js ends

// window.scrollBy(0, 716);
// for (let i = 0; i <= 716; i++){
//     console.log(i);
//     var j =+ 1;
//     var interval = setInterval(function() {
//         if(i == 716){
//             clearInterval(interval);
//             return;
//         }
//             window.scrollBy(0, 50);
//         }, 20);

// }

// button for next section starts

let currentSection = null;
let currentHeight = null;
var currentSectionId = setInterval(() => {
  const currentScrollPosition = window.scrollY;

  // Select all sections on the page
  const sections = document.querySelectorAll("section");

  // Find the section that is currently in view
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    const sectionBottom = sectionTop + section.offsetHeight;

    if (
      currentScrollPosition >= sectionTop &&
      currentScrollPosition <= sectionBottom
    ) {
      currentSection = section.offsetTop;

      currentHeight = section.offsetHeight;
    }
  });
  // Log the found section to the console
}, 1000);

var sectionButton = document.getElementById("scrollButton");
function clickScroll() {
  sectionButton.addEventListener("click", () => {
    var locat = window.scrollY;
    // console.log(locat);
    let targetpoint = null;
    console.log(currentSection);

    for (var i = locat; i <= currentSection + currentHeight; i++) {
      targetpoint++;
    }
    var targetpoint2 = locat + targetpoint;
    // console.log(targetpoint);
    // window.scrollBy(0, targetpoint);
    window.scrollTo({ top: targetpoint2, behavior: "smooth" });
  });
}
clickScroll();
// console.log(sectionButton);

// mouse animation click scroll

$(".mousey").click(function () {
  var interval = setInterval(function () {
    var homeSection = document.getElementById("about");

    var targetSectionCoordinat = homeSection.getBoundingClientRect();
    console.log(targetSectionCoordinat.bottom);

    if (targetSectionCoordinat.top <= 0) {
      clearInterval(interval);
      return;
    }
    window.scrollBy(0, 10);
  }, 5);
});

// var mouseclick = () => {
//     var clickOnMouse = document.getElementsByClassName("scroller");
//     console.log(clickOnMouse);
//     clickOnMouse.addEventListener("click", () => {
//         console.log("button was clicked");
//         window.scrollBy(0, 50);
//     });
// }
// mouse animation click scroll ends

// shweta code

// document.addEventListener("DOMContentLoaded", function () {
//     // sare section ko select kiya &button ko
//     const sections = document.querySelectorAll("section");
//     const scrollButton = document.getElementById("scrollButton");

//     let currentSectionIndex = 0;
//     //   button par listener
//     scrollButton.addEventListener("click", function () {

//         // scrollToSection --> mtlb hai ki jo section mila hia use() use hisab se wo smoth scroll krega
//         scrollToSection(currentSectionIndex);
//         currentSectionIndex++;
//         //   console.log(currentSectionIndex);
//     });

//     window.addEventListener("scroll", function () {
//         // scrollPosition: kitna neeche scroll kiya hua hai secytion me.
//         const scrollPosition = window.scrollY;
//         /*   function(section, index) -> iteration mein section variable
//           mein current section ayega, aur index mein us element ka index . */
//         sections.forEach(function (section, index) {
//             // sectionTop: kitni doori hai section ka top document ke top se.
//             const sectionTop = section.offsetTop;
//             const sectionBottom = sectionTop + section.clientHeight;
//             /*  agr ye condition true huyi toh wo smj jayega ki hame cureent section me hi
//              scroll krna hai abhi or agr glt hui toh next section me move kr degi*/

//             if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//                 currentSectionIndex = index;
//             }
//         });
//     });

//     function scrollToSection(index) {

//         // index hame currentSectionIndex se milega kyuki hame use function me call krte time as a parametere diya ahai esliye
//         const sectionTop = sections[index].offsetTop;
//         const sectionHeight = sections[index].clientHeight;

//         /* sectionTop:  yaani section ka starting point.
//         windowHeight: Window height, mtlb screen ki height.
//         sectionHeight: Current section  height.*/

//         //   innerHeight -->"veiwport" screen  height milti hai .
//         const windowHeight = window.innerHeight;

//         if (sectionHeight < windowHeight) {
//             // If section height is less than window height, scroll to the center of the section
//             const scrollTo = sectionTop - (windowHeight - sectionHeight) / 2;

//             // { top: scrollTo, behavior: "smooth" }: Yeh batayega  kitna scroll karna hai, aur kaise karna hai.
//             window.scrollTo({ top: scrollTo, behavior: "smooth" });
//         } else {
//             // If section height is greater than or equal to window height, scroll to the top of the section
//             window.scrollTo({ top: sectionTop, behavior: "smooth" });
//         }
//     }
// });
