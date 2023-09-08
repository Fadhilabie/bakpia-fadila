var swiper = new Swiper(".mySwiperPopuler", {
  grabCursor: true,
  centeredSlides: false,
  spaceBetween: 20,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".fa-circle-chevron-right",
    prevEl: ".fa-circle-chevron-left",
  },
});

// JavaScript untuk mengatur perilaku navbar
  // Fungsi untuk mengubah kelas aktif pada tautan navbar
  function setActiveNavLink(link) {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    link.classList.add("active");
  }

  // Fungsi untuk mengarahkan ke bagian "project"
  function scrollToProject() {
    const projectSection = document.getElementById("project");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Event listener untuk mengatur perilaku saat mengklik "Service" di navbar
  const serviceNavLink = document.querySelector(".nav-link[href='#project']");
  if (serviceNavLink) {
    serviceNavLink.addEventListener("click", (event) => {
      event.preventDefault(); // Hindari mengikuti tautan langsung
      scrollToProject(); // Arahkan ke "project"
      setActiveNavLink(serviceNavLink); // Aktifkan kelas "active" pada tautan "Service"
    });
  }
