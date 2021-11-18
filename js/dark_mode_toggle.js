// Elements
var body = document.body;
var nav = document.getElementsByTagName("nav")[0];
var button = document.getElementById("dark-mode-toggle");
var icon = document.getElementById("dark-mode-toggle-icon");

// Theme storage
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
var isDark = savedTheme == "dark" ? true : false;
setTheme(savedTheme);

button.addEventListener("click", () => {
    // Add transition before changing theme
    nav.classList.add("transition");
    body.classList.add("transition");
    // Apply theme
    isDark = !isDark;
    if (isDark) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
});

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);
    if (mode === "dark") {
        body.classList.add("darktheme");
        icon.className = "fas fa-sun";
    } else if (mode === "light") {
        body.classList.remove("darktheme");
        icon.className = "fas fa-moon";
    }
}
