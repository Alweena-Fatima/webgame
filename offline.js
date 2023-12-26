document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navlist = document.querySelector(".navlist");
  const switchAudio = new Audio('switch.mp3'); // Replace with the path to your audio file


  // Toggle the active class on navlist when the menu icon is clicked
  menuIcon.addEventListener("click", function (event) {
    navlist.classList.toggle("active");
    event.stopPropagation(); // Prevent the click event from reaching the document body
  });

  // Close navlist when clicking outside of it
  document.body.addEventListener("click", function (event) {
    // Check if the clicked element is not inside the navlist
    if (!navlist.contains(event.target) && !menuIcon.contains(event.target)) {
      navlist.classList.remove("active"); // Close navlist
    }
  });

  // Function to toggle dark mode
  function toggleDarkMode() {
    // Check the current dark mode state of the body
    const currentMode = document.body.classList.contains('dark-mode');

    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');

    // Update the dark mode state in local storage
    localStorage.setItem('darkMode', !currentMode);
    // Play the switch audio
    switchAudio.play();

    // Update the sun/moon icon based on the current mode
    const darkModeIcon = document.getElementById("dark-mode-toggle").querySelector("i");
    const isDarkMode = document.body.classList.contains("dark-mode");
    const rotationValue = isDarkMode ? "180deg" : "0deg";
    darkModeIcon.style.transition = "transform 0.5s ease";
    darkModeIcon.style.transform = `rotate(${rotationValue})`;
    darkModeIcon.className = isDarkMode ? "bx bx-sun" : "bx bx-moon";
  }

  // Add a click event listener to the dark mode toggle icon
  document
    .getElementById("dark-mode-toggle")
    .addEventListener("click", function () {
      // Toggle dark mode when the toggle icon is clicked
      toggleDarkMode();
    });

  // Check local storage for dark mode preference on page load
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  if (savedDarkMode) {
    // If dark mode preference is saved, toggle dark mode on page load
    toggleDarkMode();
  }
});
