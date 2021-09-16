var button = document.getElementById("dark-mode-toggle");
var icon = document.getElementById("dark-mode-toggle-icon");
var darkThemeCSS = document.getElementById("dark-mode-theme");

var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
var isDark = savedTheme == "dark" ? true : false;
setTheme(savedTheme);

button.addEventListener("click", () => {
    isDark = !isDark;
    if (isDark) setTheme("dark");
    else setTheme("light");
});

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);

    if (mode === "dark") {
        darkThemeCSS.disabled = false;
        icon.className = "fas fa-sun";
    } else if (mode === "light") {
        darkThemeCSS.disabled = true;
        icon.className = "fas fa-moon";
    }
}
