
document.addEventListener('DOMContentLoaded', function() {
  const menuCheckbox = document.getElementById('menu'); 
  const menuList = document.querySelector('.menu__container__list');
  
 
  menuCheckbox.addEventListener('change', function() {
    if (menuCheckbox.checked) {
      menuList.style.display = 'block';  
    } else {
      menuList.style.display = 'none';  
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll('.testimonials__dots .dot');
  const testimonials = document.querySelectorAll('.testimonials__content');
  let activeIndex = 0;

  function updateTestimonials(index) {
      testimonials.forEach((testimonial, i) => {
          if (i === index) {
              testimonial.classList.add('active');
          } else {
              testimonial.classList.remove('active');
          }
      });

      dots.forEach((dot, i) => {
          if (i === index) {
              dot.classList.add('active');
          } else {
              dot.classList.remove('active');
          }
      });
  }

  dots.forEach(dot => {
      dot.addEventListener('click', function () {
          const index = parseInt(dot.getAttribute('data-index'));
          updateTestimonials(index);
          activeIndex = index;
      });
  });

  updateTestimonials(activeIndex);
});

