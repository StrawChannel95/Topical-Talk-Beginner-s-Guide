document.addEventListener("DOMContentLoaded", function () {
    console.log("Topical Talk Beginner's Guide Loaded!");

    // Get sidebar and buttons
    const sidebar = document.querySelector('.sidebar');
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.toggle-btn');
    const links = document.querySelectorAll('.sidebar a');

    // Hide sidebar on load
    sidebar.classList.remove('active');

    // Open sidebar
    openBtn.addEventListener("click", function () {
        sidebar.classList.add("active");
    });

    // Close sidebar
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });

    // Close sidebar when clicking a menu link
    links.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    });
});
