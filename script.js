document.addEventListener('DOMContentLoaded', function() {
  // Controle do menu
  const menuCheckbox = document.getElementById('menu'); 
  const menuList = document.querySelector('.menu__container__list');
  
  menuCheckbox.addEventListener('change', function() {
    if (menuCheckbox.checked) {
      menuList.style.display = 'block';  
    } else {
      menuList.style.display = 'none';  
    }
  });

  // Controle dos depoimentos
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

  dots.forEach(dot => {
    dot.addEventListener('click', function () {
      const index = parseInt(dot.getAttribute('data-index'));
      updateTestimonials(index);
      activeIndex = index;
    });
  });

  updateTestimonials(activeIndex);

  // Aparição lateral dos serviços
  const serviceItems = document.querySelectorAll('.services__content__service');
  
  function handleScroll() {
    serviceItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.left < window.innerWidth && rect.right >= 0) {
        item.classList.add('services__content__service--visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Aparição lateral dos testemunhos
  const testimonialItems = document.querySelectorAll('.testimonials__content');
  
  function handleTestimonialScroll() {
    testimonialItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.left < window.innerWidth && rect.right >= 0) {
        item.classList.add('testimonials__content--visible');
      }
    });
  }

  window.addEventListener('scroll', handleTestimonialScroll);
  handleTestimonialScroll();

  // Efeito de fade-in na seção aboutMe
  const aboutMeElements = document.querySelectorAll('.aboutMe, .aboutMe__content, .aboutMe img, .aboutMe h4, .aboutMe h2, .aboutMe li');

  function handleAboutMeScroll() {
    aboutMeElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', handleAboutMeScroll);
  handleAboutMeScroll();

  
        });

