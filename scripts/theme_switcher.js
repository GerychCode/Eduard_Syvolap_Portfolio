document.addEventListener("DOMContentLoaded", function() {
    const theme = localStorage.getItem('theme');
    if(theme) {
        document.documentElement.classList.add(theme);
    }
    else {
        document.documentElement.classList.add("light");
    }
})

const button = document.getElementById('theme-switcher');
button.addEventListener("click", () => {
    const classList = document.documentElement.classList;
    if(classList.value === "dark") {
        classList.remove("dark", "light");
        classList.add("light");
        localStorage.setItem('theme', 'light');
    }
    else {
        classList.remove("dark", "light");
        classList.add("dark");
        localStorage.setItem('theme', 'dark');
    }
    console.log(classList.value)
})