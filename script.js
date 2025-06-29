function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      updateDarkModeButton();
    }

    function updateDarkModeButton() {
      const isDark = document.body.classList.contains('dark-mode');
      document.getElementById('dark-icon').style.display = isDark ? 'none' : 'inline';
      document.getElementById('light-icon').style.display = isDark ? 'inline' : 'none';
      document.getElementById('mode-label').textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }

    function closeMobileMenu() {
      document.getElementById('mobile-menu').classList.remove('opacity-100', 'pointer-events-auto');
      document.getElementById('mobile-menu').classList.add('opacity-0', 'pointer-events-none');
    }

    function toggleGcpProjects() {
      const panel = document.getElementById('gcp-projects');
      const chevron = document.getElementById('gcp-chevron');
      const btn = document.getElementById('gcp-toggle');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        panel.style.maxHeight = '0';
        btn.setAttribute('aria-expanded', 'false');
        chevron.style.transform = '';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
        chevron.style.transform = 'rotate(180deg)';
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('section');
      const options = {
        threshold: 0.1
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('transition-opacity', 'duration-1000', 'opacity-100', 'translate-y-0');
          }
        });
      }, options);
      sections.forEach(section => {
        section.classList.add('opacity-0', 'translate-y-4');
        observer.observe(section);
      });
      updateDarkModeButton();

      // Mobile menu logic
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuClose = document.getElementById('mobile-menu-close');
      if (mobileMenuBtn && mobileMenu && mobileMenuClose) {
        mobileMenuBtn.onclick = () => {
          mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
          mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
        };
        mobileMenuClose.onclick = closeMobileMenu;
      }
    });