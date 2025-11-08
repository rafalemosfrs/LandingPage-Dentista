document.addEventListener('DOMContentLoaded', function() {
  const menuCheckbox = document.getElementById('menu');
  const menuList = document.querySelector('.menu__container__list');

  if (menuCheckbox && menuList) {
    menuCheckbox.addEventListener('change', function () {
      if (menuCheckbox.checked) {
        menuList.style.display = 'block';
      } else {
        menuList.style.display = 'none';
      }
    });

    function syncMenuDisplay() {
      const isDesktop = window.matchMedia('(min-width: 1400px)').matches;
      if (isDesktop) {
        menuList.style.display = '';
        menuCheckbox.checked = false;
      } else {
        if (!menuCheckbox.checked) {
          menuList.style.display = 'none';
        }
      }
    }

    window.addEventListener('resize', syncMenuDisplay);
    syncMenuDisplay();

    menuList.addEventListener('click', function (e) {
      const target = e.target;
      if (target && (target.tagName === 'A' || target.closest('a'))) {
        menuCheckbox.checked = false;
        menuList.style.display = 'none';
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !window.matchMedia('(min-width: 1400px)').matches) {
        menuCheckbox.checked = false;
        menuList.style.display = 'none';
      }
    });

    document.addEventListener('click', function (e) {
      const clickedInsideMenu = e.target === menuCheckbox || e.target.closest('.menu__container__list') || e.target.closest('label[for="menu"]');
      if (!clickedInsideMenu && !window.matchMedia('(min-width: 1400px)').matches) {
        menuCheckbox.checked = false;
        menuList.style.display = 'none';
      }
    });
  }

  const dots = document.querySelectorAll('.testimonials__dots .dot');
  const testimonials = document.querySelectorAll('.testimonials__content');
  let activeIndex = 0;

  function updateTestimonials(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  if (dots.length && testimonials.length) {
    dots.forEach(dot => {
      dot.addEventListener('click', function () {
        const index = parseInt(dot.getAttribute('data-index'), 10);
        if (!Number.isNaN(index)) {
          updateTestimonials(index);
          activeIndex = index;
        }
      });
    });
    updateTestimonials(activeIndex);
  }

  const serviceItems = document.querySelectorAll('.services__content__service');

  function handleScroll() {
    serviceItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.left < window.innerWidth && rect.right >= 0) {
        item.classList.add('services__content__service--visible');
      }
    });
  }

  if (serviceItems.length) {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }

  const testimonialItems = document.querySelectorAll('.testimonials__content');

  function handleTestimonialScroll() {
    testimonialItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.left < window.innerWidth && rect.right >= 0) {
        item.classList.add('testimonials__content--visible');
      }
    });
  }

  if (testimonialItems.length) {
    window.addEventListener('scroll', handleTestimonialScroll);
    handleTestimonialScroll();
  }

  const aboutMeElements = document.querySelectorAll('.aboutMe, .aboutMe__content, .aboutMe img, .aboutMe h4, .aboutMe h2, .aboutMe li');

  function handleAboutMeScroll() {
    aboutMeElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      }
    });
  }

  if (aboutMeElements.length) {
    window.addEventListener('scroll', handleAboutMeScroll);
    handleAboutMeScroll();
  }
});
