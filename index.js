document.addEventListener("DOMContentLoaded", function () {
    console.log("Topical Talk Beginner's Guide Loaded!");

    // Get sidebar and buttons
    const sidebar = document.querySelector('.sidebar');
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.toggle-btn');
    const links = document.querySelectorAll('.sidebar a');

    // Hide sidebar on load
    sidebar.classList.remove('active');

    // Function to toggle sidebar
    function toggleSidebar(show) {
        if (show) {
            sidebar.classList.add("active");
            openBtn.style.display = "none"; // Hide open button
        } else {
            sidebar.classList.remove("active");
            openBtn.style.display = "block"; // Show open button
        }
    }

    // Open sidebar
    openBtn.addEventListener("click", function () {
        toggleSidebar(true);
    });

    // Close sidebar
    closeBtn.addEventListener("click", function () {
        toggleSidebar(false);
    });

    // Close sidebar when clicking a menu link
    links.forEach(link => {
        link.addEventListener("click", function () {
            toggleSidebar(false);
        });
    });
});
