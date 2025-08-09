document.addEventListener("DOMContentLoaded", () => {
      const counters = document.querySelectorAll(".stat-number");
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText.replace(/[^0-9]/g, "");
          const increment = target / 2000;
          if (count < target) {
            counter.innerText = "+" + Math.ceil(count + increment).toLocaleString();
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = "+" + target.toLocaleString();
          }
        };
        updateCount();
      });
    });

//     function toggleMenu() {
//     const navList = document.querySelector('nav ul');
//     navList.classList.toggle('show');
//   }

function toggleMenu() {
    const nav = document.getElementById('main-nav');
    const toggleBtn = document.getElementById('menuToggle');

    nav.classList.toggle('show');

    // Toggle between ☰ and ✕
    if (nav.classList.contains('show')) {
      toggleBtn.style.display = 'none'; // Hide ☰
    } else {
      toggleBtn.style.display = 'block'; // Show ☰
    }
  }

  let lastScrollTop = 0;
  const threshold = 10; // pixels to consider as actual scroll
  const searchBar = document.getElementById("searchBarWrapper");

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (window.innerWidth <= 768) {
      const scrollDiff = currentScroll - lastScrollTop;

      if (Math.abs(scrollDiff) > threshold) {
        if (scrollDiff > 0) {
          // Scrolled down
          searchBar.classList.add("hide-on-scroll");
        } else {
          // Scrolled up
          searchBar.classList.remove("hide-on-scroll");
        }
        // lastScrollTop = currentScroll;
      }
    }
  });