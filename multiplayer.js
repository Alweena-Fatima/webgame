document.getElementById('aboutLink').addEventListener('click', function () {
    var aboutModal = new bootstrap.Modal(document.getElementById('aboutModal'));
    aboutModal.show();
});
document.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to the dark mode toggle icon
    
    document.getElementById('dark-mode-toggle').addEventListener('click', function () {
      // Toggle the 'dark-mode' class on the body
      document.body.classList.toggle('dark-mode');
      const rotationValue = isDarkMode ? '180deg' : '0deg';
      darkModeIcon.style.transition = 'transform 0.5s ease';
        darkModeIcon.style.transform = `rotate(${rotationValue})`;
      darkModeIcon.className = isDarkMode ? 'bx bx-sun' : 'bx bx-moon';
    });
  });