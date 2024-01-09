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
 