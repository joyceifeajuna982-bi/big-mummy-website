document.addEventListener('DOMContentLoaded', () => {

  // --- Page Tab Switching ---
  const navItems = document.querySelectorAll('.nav-item');
  const pageTabs = document.querySelectorAll('.page-tab');
  const sidebar = document.getElementById('sidebar');

  function switchTab(targetTabId) {
    pageTabs.forEach(tab => tab.classList.remove('active'));

    const targetTab = document.getElementById(targetTabId);
    if (targetTab) {
      targetTab.classList.add('active');
    }

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('data-tab') === targetTabId) {
        item.classList.add('active');
      }
    });
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTabId = item.getAttribute('data-tab');
      switchTab(targetTabId);
      if (sidebar) sidebar.classList.remove('open');
    });
  });

  document.querySelectorAll('.switch-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');
      switchTab(targetTabId);
    });
  });


  // --- Mobile Sidebar Toggle ---
  const menuToggle = document.getElementById('menuToggle');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }


  // --- Booking Modal Controls Only (No Form Interception) ---
  const bookingModal = document.getElementById('bookingModal');
  const closeBookingBtn = document.getElementById('closeBookingBtn');
  const openBtns = document.querySelectorAll('.openBookingBtn');

  if (openBtns.length && bookingModal) {
    openBtns.forEach(btn => {
      btn.addEventListener('click', () => bookingModal.classList.add('active'));
    });
  }

  if (closeBookingBtn && bookingModal) {
    closeBookingBtn.addEventListener('click', () => bookingModal.classList.remove('active'));
  }

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) bookingModal.classList.remove('active');
    });
  }


  // --- Portfolio Search Filter ---
  const searchBox = document.getElementById('portfolio-input');
  const imageGallery = document.getElementById('portfolio-grid');

  if (searchBox && imageGallery) {
    const imageBoxes = imageGallery.querySelectorAll('.portfolio-item');

    searchBox.addEventListener('input', function () {
      const filter = searchBox.value.toLowerCase().trim();

      imageBoxes.forEach(box => {
        const heading = box.querySelector('h4');
        const img = box.querySelector('img');

        const titleText = heading ? heading.textContent.toLowerCase() : '';
        const altText = img ? img.alt.toLowerCase() : '';

        if (titleText.includes(filter) || altText.includes(filter)) {
          box.classList.remove('hide');
        } else {
          box.classList.add('hide');
        }
      });
    });
  }


  // --- Slideshow Script ---
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (!slides.length) return;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", "");
    }

    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].className += " active2";
    }

    setTimeout(showSlides, 2000);
  }

});