// Navbar
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger")
    const navLists = document.querySelector("nav")

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("toggle-hamburger");
        navLists.classList.toggle("nav-active");
    });

};

navSlide();

// Clear Form
window.onBeforeUnload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}