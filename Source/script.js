const textToHide1 = document.getElementById('main-quote');

// Initialize the text opacity to 1
anime.set(textToHide1, {
  opacity: 1
});

window.addEventListener("scroll", function() {
  const scrollTop =  document.documentElement.scrollTop;

  if (scrollTop > 300) {
    // Fade out animation
    anime({
      targets: textToHide1,
      opacity: 0,
      duration: 500,
      easing: 'easeInOutQuad'
    });
  } else {
    // Fade in animation
    anime({
      targets: textToHide1,
      opacity: 1,
      duration: 500,
      easing: 'easeInOutQuad'
    });
  }
});
