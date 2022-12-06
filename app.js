
let darkModeState = false;
// https://www.ditdot.hr/en/dark-mode-website-tutorial
// Want to redo the local storage (relearn it) so I can make other changes




//darklight toggle
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
const darklightToggle = document.querySelector(".toggle-darklight")

function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
    darkModeState = state;
}

function setDarkModeLocalStorage(state) {
    localStorage.setItem("dark-mode", state);
}

toggleDarkMode(localStorage.getItem("dark-mode") == "true");

useDark.addEventListener("change", (event) => {
    toggleDarkMode(event.matches)
})

darklightToggle.addEventListener("click", setDarkTheme)
function setDarkTheme() {
    if (darkModeState) {
        toggleDarkMode(false);
        setDarkModeLocalStorage(false);
        // note to self move this to local storage 
        darklightToggle.setAttribute("aria-label", "Switch to dark mode")
        document.querySelector("[toggle-img]").setAttribute("src", "images/moon.svg")
    } else {
        toggleDarkMode(true);
        setDarkModeLocalStorage(true);
        // note to self move this to local storage 
        darklightToggle.setAttribute("aria-label", "Switch to light mode")
        document.querySelector("[toggle-img]").setAttribute("src", "images/sun.svg")
    }
}

// nav toggle
const navMenuToggle = document.querySelector(".nav-menu-toggle")
const navMenuClose = document.querySelector(".nav-menu-close")
const navwrapper = document.querySelector(".nav-wrapper")

// very temping to just make it 1 button and have it z-index above everthing ._.
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