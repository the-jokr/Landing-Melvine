class NavLink {
  constructor(link) {
    this.link = link;
    this.navMenu = document.querySelector(".nav-menu");
    this.menuIcon = document.querySelector(".menu-icon");

    this.link.addEventListener("click", e => {
      e.preventDefault();
      this.select();
    });

    this.menuIcon.addEventListener("click", e => {
      e.preventDefault();
      this.toggleNavMenu();
    });
  }

  toggleNavMenu() {
    this.navMenu.classList.toggle("open");
  }

  select() {
    const links = document.querySelectorAll(".nav-menu li");
    links.forEach(link => link.classList.remove("active"));
    this.link.classList.add("active");
  }
}
const links = document.querySelectorAll(".nav-menu li");

links.forEach(link => new NavLink(link));
