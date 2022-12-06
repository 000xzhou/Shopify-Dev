
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
const navMenuToggle = document.querySelector("#nav-menu-toggle")
