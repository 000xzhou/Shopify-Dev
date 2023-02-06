// toggle darkmode
let darkMode = localStorage.getItem("darkMode")
const darkModeToggle = document.querySelector(".toggle-darklight")
const enableDarkMode = () => {
    document.body.classList.add("dark-mode")
    darkModeToggle.setAttribute("aria-label", "Switch to light mode")
    document.querySelector("[toggle-img]").setAttribute("src", "../images/sun.svg")
    localStorage.setItem("darkMode", "enabled")

}
const disableDarkMode = () => {
    document.body.classList.remove("dark-mode")
    darkModeToggle.setAttribute("aria-label", "Switch to dark mode")
    document.querySelector("[toggle-img]").setAttribute("src", "../images/moon.svg")
    localStorage.setItem("darkMode", "disable")
}
darkMode === "enabled" ? enableDarkMode() : disableDarkMode()

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode")

    if (darkMode !== "enabled") {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
})

// nav toggle
const navMenuToggle = document.querySelector(".nav-menu-toggle")
const navMenuClose = document.querySelector(".nav-menu-close")
const navwrapper = document.querySelector(".nav-wrapper")

// very temping to just make it 1 button 
navMenuToggle.addEventListener("click", toggleMenu)
navMenuClose.addEventListener("click", toggleMenu)

function toggleMenu() {
    const isOpened = navMenuToggle.getAttribute("aria-expanded") === "true"

    if (isOpened) {
        navMenuToggle.setAttribute('aria-expanded', false)
        navMenuClose.setAttribute('aria-expanded', false)
        navwrapper.setAttribute('data-state', "closing")
        navwrapper.addEventListener("animationend", () => {
            navwrapper.setAttribute('data-state', "close")
        }, { once: true })
    } else {
        navMenuToggle.setAttribute('aria-expanded', true)
        navMenuClose.setAttribute('aria-expanded', true)
        navwrapper.setAttribute('data-state', "open")
    }

}

const menuDown = document.querySelector(".menu-down")
const menuList = document.querySelector(".secondary-nav-list")
const rotate180 = document.querySelector(".rotate180")

menuDown.addEventListener("click", () => {
    const isVisible = menuDown.getAttribute("aria-expanded") === "false"

    if (isVisible) {
        menuDown.setAttribute("aria-expanded", true)
        rotate180.style.transform = "rotate(180deg)"
        menuList.setAttribute("visibily-hidden", false)

    } else {
        menuDown.setAttribute("aria-expanded", false)
        rotate180.style.transform = "rotate(0deg)"
        menuList.setAttribute('visibily-hidden', "closing")
        menuList.addEventListener("animationend", () => {
            menuList.setAttribute("visibily-hidden", true)
        }, { once: true })
    }
})

const apinMarket = document.querySelector(".api-n-market")
const subpULnav = document.querySelector(".sub-p-ul-nav")
apinMarket.addEventListener("click", () => {
    const isVisible = apinMarket.getAttribute("aria-expanded") === "false"
    if (isVisible) {
        apinMarket.setAttribute("aria-expanded", true)
        subpULnav.setAttribute("visibily-hidden", false)

    } else {
        apinMarket.setAttribute("aria-expanded", false)
        subpULnav.setAttribute('visibily-hidden', true)
    }
})