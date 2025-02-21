document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const searchInput = document.getElementById("search");

    // Dark mode toggle
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    // Search filter
    searchInput.addEventListener("input", function () {
        let filter = searchInput.value.toLowerCase();
        let categories = document.querySelectorAll(".category");

        categories.forEach(category => {
            let items = category.getElementsByTagName("li");
            let found = false;

            Array.from(items).forEach(item => {
                let text = item.textContent.toLowerCase();
                if (text.includes(filter)) {
                    item.style.display = "";
                    found = true;
                } else {
                    item.style.display = "none";
                }
            });

            category.style.display = found ? "" : "none";
        });
    });
});
