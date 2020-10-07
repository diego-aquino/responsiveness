let showingMobileNavbar = false;

const body = document.querySelector('body');
const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');

export function setupMobileNavbar() {
  menuToggle.addEventListener('click', toggleMobileNavbar);
}

function toggleMobileNavbar() {
  showingMobileNavbar = !showingMobileNavbar;
  menuSection.classList.toggle('active', showingMobileNavbar);

  body.style.overflow = showingMobileNavbar ? 'hidden' : 'auto';
}

function closeMobileNavbarOnLinkClick() {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (showingMobileNavbar) toggleMobileNavbar();
    });
  });
}

closeMobileNavbarOnLinkClick();
