const navbar = document.getElementById("navbar");
var navlogo= document.getElementById("logo");
const adinfo = document.getElementById("adinfo");
const footer = document.getElementById("footer");
const about = document.getElementById("aboutbox");
const about2 = document.getElementById("aboutbox2");
const about3 = document.getElementById("aboutbox3");
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    // At the top of the page, make navbar transparent
    navbar.style.backgroundColor = "transparent";
    navbar.style.color="white";
    navbar.style.outlineColor="transparent";
    navlogo.src="./images/lilhousenavw.png";
  } else {
    // Scrolled down, change navbar background color to white
    navbar.style.backgroundColor = "white";
    navbar.style.color="black";
    navbar.style.outlineColor="gray";
    navlogo.src="./images/lilhousenav.png";
  }
});




// Function to handle window resize events
function handleResize() {
  var windowWidth = window.innerWidth; // Get the current window width
  
  // Check if the window width is less than or equal to a specific value (e.g., 768 pixels)
  if (windowWidth <= 768) {
    navbar.style.flexDirection="column";
    navbar.style.height="15vh";
    navbar.style.width="100vw";
    adinfo.style.flexDirection="column";
    adinfo.style.alignItems="center";
    adinfo.style.marginTop="100vh";
    about.style.maxWidth="80vw";
    about2.style.maxWidth="80vw";
    about3.style.maxWidth="80vw";
    footer.style.marginTop="40vh";

    var element = document.getElementById('myElement'); 
    
    element.style.width = '100%'; 
  } else {
    navbar.style.flexDirection="row";
    navbar.style.height="50px";
    adinfo.style.flexDirection="row";
    adinfo.style.alignItems="center";
    adinfo.style.marginTop="60vh";
    footer.style.marginTop="0";
    about.style.maxWidth="30vw";
    about2.style.maxWidth="30vw";
    about3.style.maxWidth="30vw";
    var element = document.getElementById('myElement'); // Replace with your element's ID
    element.style.width = 'auto'; // Reset the width
  }
}

// Add an event listener for the "resize" event
window.addEventListener('resize', handleResize);

// Call the function initially to set the initial state based on the window width
handleResize();



