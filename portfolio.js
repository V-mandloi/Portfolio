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
    
  }
});

// Log the found section to the console
console.log(currentSection);
}, 10000);

var sectionButton = document.getElementById("scroll-button");
sectionButton.addEventListener("click", () => {
    window.scrollBy(0, 716);
    console.log(currentSection);
})
console.log(sectionButton);



/*location for divbutton*/
var buttonForLoc = document.getElementById("scroll-button");
var locationButton = setInterval(() => {
    
})
// button for next section ends