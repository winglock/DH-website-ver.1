document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const homeBtn = document.getElementById('homeBtn');
  const devExplanationBtn = document.getElementById('devExplanationBtn');
  const trustBtn = document.getElementById('trustBtn');

  const homeSection = document.getElementById('home');
  const devExplanationSection = document.getElementById('devExplanation');
  const trustSection = document.getElementById('trust');

  function scrollToSection(section) {
    const navHeight = navbar.offsetHeight;
    const sectionTop = section.offsetTop - navHeight - 20; // 20px padding
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }

  homeBtn.addEventListener('click', () => scrollToSection(homeSection));
  devExplanationBtn.addEventListener('click', () => scrollToSection(devExplanationSection));
  trustBtn.addEventListener('click', () => scrollToSection(trustSection));
});
