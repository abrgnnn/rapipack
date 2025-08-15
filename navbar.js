async function loadNavbar() {
  const host = document.getElementById('navbar-container');
  if (!host) return;

  try {
    // Fetch the navbar HTML file
    const res = await fetch('navbar.html', { cache: 'no-cache' });
    if (!res.ok) {
      throw new Error('Navbar HTML not found');
    }

    // Insert the navbar content into the page
    const navbarHTML = await res.text();
    host.innerHTML = navbarHTML;

    // Now that the navbar is loaded, we can attach event listeners
    attachNavbarListeners();
  } catch (error) {
    console.error('Navbar loading failed:', error);
  }
}

function attachNavbarListeners() {
  // Add a small delay to ensure DOM is fully loaded
  setTimeout(() => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    console.log('Hamburger icon:', hamburgerIcon);
    console.log('Mobile menu:', mobileMenu);

    if (hamburgerIcon && mobileMenu) {
      // Remove any existing event listeners
      hamburgerIcon.replaceWith(hamburgerIcon.cloneNode(true));
      const newHamburgerIcon = document.getElementById('hamburger-icon');
      
      newHamburgerIcon.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Hamburger clicked!');
        
        // Toggle the menu-open class instead of hidden
        mobileMenu.classList.toggle('menu-open');
        
        // Also log the current classes for debugging
        console.log('Mobile menu classes:', mobileMenu.classList.toString());
      });

      // Close mobile menu when clicking on a link
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('menu-open');
        });
      });

      // Close mobile menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!newHamburgerIcon.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.remove('menu-open');
        }
      });
    } else {
      console.error('Hamburger icon or mobile menu not found!');
    }

    // Handle language buttons if needed
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        console.log('Language changed to:', lang);
        // Add your language switching logic here
      });
    });
  }, 100);
}

// Load the navbar when the DOM is ready
window.addEventListener('DOMContentLoaded', loadNavbar);