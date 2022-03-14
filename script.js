const allNavLinks = document.querySelectorAll('.navLink');
const navLinks = document.querySelector('.navLinks');
const skillSection = document.querySelector('.skillsSection');
const projects = document.querySelectorAll('.projectCard');
const experiences = document.querySelectorAll('.event');
const cvBtn = document.querySelector('.cta--primary');

console.log(experiences);

// alert("hello world");
console.log(navLinks);

const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) entry.target.classList.add('visible');
  },
  {
    threshold: 0.2,
  }
);

projects.forEach((project) => {
  observer.observe(project);
});

experiences.forEach((experience) => {
  observer.observe(experience);
});

cvBtn.addEventListener('click', function () {
  document.querySelector('.downloadFile').click();
});

navLinks.addEventListener('click', (e) => {
  let target = e.target;
  console.log(target.classList);
  let section;
  if (target.classList.contains('navLink')) {
    section = `.${target.dataset.section}`;
    console.log(section);
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
  }
});
