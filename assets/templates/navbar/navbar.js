// Funkcja do dodania event listenerów do navbaru
function setupNavbar() {
  document.getElementById("mobile-menu").addEventListener("click", function () {
    var links = document.querySelector(".navbar__links");
    links.classList.toggle("active");
  });
}
