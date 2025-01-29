document.addEventListener("DOMContentLoaded", function() {
    console.log("Topical Talk Beginner's Guide Loaded!");

    // Smooth scrolling for sidebar links
    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Sidebar toggle function
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('hidden');
    content.classList.toggle('sidebar-hidden');

    // Change button icon
    const btn = document.querySelector('.toggle-btn');
    btn.textContent = sidebar.classList.contains('hidden') ? '☰' : '✖';
}
