const pages = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href').substring(1);

    pages.forEach(page =>
      page.style.display = (page.id === target) ? 'block' : 'none'
    );

    navLinks.forEach(l =>
      l.classList.toggle('active', l === link)
    );
  });
});
