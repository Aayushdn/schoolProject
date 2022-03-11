const allNavLinks = document.querySelectorAll(".navLink");
const navLinks = document.querySelector(".navLinks");

// alert("hello world");
console.log(navLinks);

navLinks.addEventListener("click", (e) => {
  let target = e.target;
  console.log(target.classList);
  let section;
  if (target.classList.contains("navLink")) {
    section = `.${target.dataset.section}`;
    console.log(section);
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  }
});
