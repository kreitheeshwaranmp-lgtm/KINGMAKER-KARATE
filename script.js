/* --------------------------
   BOOKING FORM POPUP
--------------------------- */
const form = document.getElementById('bookingForm');
const popup = document.getElementById('bookingPopup');
const closePopup = document.getElementById('closePopup');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload
    popup.style.display = 'flex'; // show popup
    form.reset(); // clear form
  });
}

if (closePopup) {
  closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
  });
}

if (popup) {
  // close when clicking outside
  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
}


/* --------------------------
   FADE-IN ON SCROLL ANIMATION
--------------------------- */
const fadeElements = document.querySelectorAll(".fade-in");

function revealOnScroll() {
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 60) {
      el.classList.add("show");
    }
  });
}

// Trigger on load + scroll
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();