document.addEventListener('DOMContentLoaded', function () {
    // Make sure elements are defined inside the DOMContentLoaded event
    const textElement = document.getElementById('glowingText');
    const text = textElement.innerText;
    let newText = '';

    for (let i = 0; i < text.length; i++) {
        newText += `<span>${text[i]}</span>`;
    }
    textElement.innerHTML = newText;

    const mainElement = document.querySelector('.h-main');  // Define mainElement correctly
    const images = [
        
        "landind-page/bently-home-page/ben5.jpg",
        "landind-page/bently-home-page/ben4.jpg",
        "landind-page/bently-home-page/ben3.jpg",
        "landind-page/bently-home-page/ben2.jpg",
        "landind-page/bently-home-page/ben1.jpg",
        
        
    ];
    let currentIndex = 0;

    function changeImage() {
        mainElement.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length; // Simplified increment and wrap-around
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
});
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";

  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";

  }