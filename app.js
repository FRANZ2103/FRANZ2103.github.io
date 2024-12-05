document.addEventListener('DOMContentLoaded', () => {
  // Function to toggle mobile navigation menu
  function toggleMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      mobileMenu.classList.toggle('active');
  }

  // Attach the function to the hamburger menu
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', toggleMenu);
  } else {
      console.error('Hamburger menu not found!');
  }
});
