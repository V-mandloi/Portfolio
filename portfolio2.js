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
