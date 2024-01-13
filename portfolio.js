const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar-links");
toggleButton.addEventListener('click', function() {
    for(var i=0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle("active");
});

// hamburger button



// cursor js starts

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e =>  {
cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
});

document.addEventListener('click', () => {
    cursor.classList.add("evolut")

    setTimeout(() => {
        cursor.classList.remove("evolut");
    }, 500);
});


// cursor js ends


// smooth scroll js starts

var navMenuAnchorTags = document.querySelectorAll('.navbar a');
console.log(navMenuAnchorTags);

for (var i = 0; i < navMenuAnchorTags.length;i++) {
    navMenuAnchorTags[i].addEventListener('click', function(event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        var interval = setInterval(function() {
        var targetSectionCoordinates = targetSection.getBoundingClientRect();
        // console.log(targetSectionCoordinates);
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    });
}

// smooth scroll js ends
 

// button for next section starts


let currentSection = null;
let currentBottom = null;
var currentSectionId = setInterval(() => {
    const currentScrollPosition = window.scrollY;

// Select all sections on the page
const sections = document.querySelectorAll("section");

// Find the section that is currently in view
sections.forEach(section => {
  const sectionTop = section.offsetTop;
//   console.log(sectionTop);
  const sectionBottom = sectionTop + section.offsetHeight;

  if (currentScrollPosition >= sectionTop && currentScrollPosition <= sectionBottom) {
    currentSection = section.offsetTop;
    // console.log(currentSection);
    // console.log(currentSection.offsetHeight);
    currentBottom = currentSection + 716;
  }
});

// Log the found section to the console
// console.log(currentBottom);
}, 1000);
// console.log(currentBottom);
var sectionButton = document.getElementById("scroll-button");
// let targetpoint;
let locationButton = setInterval(() => {
    var locat = window.scrollY;
    // console.log(locat);
    let targetpoint = null;
for(var i = locat; i <= currentSection + 716; i++){
    targetpoint++;
}
// console.log(targetpoint);
return (targetpoint);
}, 100);
console.log(targetpoint);


sectionButton.addEventListener("click", () => {
    window.scrollBy(0, targetpoint);

})
console.log(sectionButton);



/*location for divbutton*/
var buttonForLoc = document.getElementById("scroll-button");
// var locationButton = setInterval(() => {
//     var locat = window.scrollY;
//     // console.log(locat);
//     var targetpoint = null;
// for(var i = locat; i <= currentSection + 716; i++){
//     targetpoint++;
// }
// // console.log(targetpoint);
// }, 100);
// button for next section ends



// mouse animation click scroll


$(".mousey").click(function() {
    window.scrollBy(0, 716);
})


// var mouseclick = () => {
//     var clickOnMouse = document.getElementsByClassName("scroller");
//     console.log(clickOnMouse);
//     clickOnMouse.addEventListener("click", () => {
//         console.log("button was clicked");
//         window.scrollBy(0, 50);
//     });
// }
// mouse animation click scroll ends