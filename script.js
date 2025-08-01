const humburger = document.getElementById("humburger");
  const navLinks = document.querySelector(".nav-links");

  humburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  

   // Agar menu open hai to scroll disable, warna enable
  if (navLinks.classList.contains("show")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

document.addEventListener("click", (event) => {
  // Agar menu open hai aur click navLinks ke bahar hua hai
  if (
    navLinks.classList.contains("show") &&
    !navLinks.contains(event.target) &&
    event.target !== humburger
  ) {
    navLinks.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});