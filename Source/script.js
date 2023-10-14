const navbar = document.getElementById("navbar");
var navlogo= document.getElementById("logo");
const adinfo = document.getElementById("adinfo");
const footer = document.getElementById("footer");
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
    adinfo.style.flexDirection="column";
    adinfo.style.alignItems="baseline";
    adinfo.style.marginTop="140vh";
    footer.style.marginTop="70vh";
    var element = document.getElementById('myElement'); 
    
    element.style.width = '100%'; 
  } else {
    navbar.style.flexDirection="row";
    navbar.style.height="50px";
    adinfo.style.flexDirection="row";
    adinfo.style.alignItems="center";
    adinfo.style.marginTop="60vh";
    footer.style.marginTop="0";
    var element = document.getElementById('myElement'); // Replace with your element's ID
    element.style.width = 'auto'; // Reset the width
  }
}

// Add an event listener for the "resize" event
window.addEventListener('resize', handleResize);

// Call the function initially to set the initial state based on the window width
handleResize();



