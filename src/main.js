const openHeaderMenu = document.getElementById("header-open-btn");
const mobMenuCloseBtn = document.getElementById("mob-menu-close-btn");
const mobMenu = document.getElementById("mob-menu");
const linkAbout = document.getElementById("link-about")
const linkYachts = document.getElementById("link-yachts")
const linkReviews = document.getElementById("link-reviews")

openHeaderMenu.addEventListener("click", () => {
    mobMenu.classList.add("is-mob-menu-open")
})

mobMenuCloseBtn.addEventListener("click", () => {
    mobMenu.classList.remove("is-mob-menu-open")
})

linkAbout.addEventListener("click", () => {
    mobMenu.classList.remove("is-mob-menu-open")
})

linkYachts.addEventListener("click", () => {
    mobMenu.classList.remove("is-mob-menu-open")
})

linkReviews.addEventListener("click", () => {
    mobMenu.classList.remove("is-mob-menu-open")
})
