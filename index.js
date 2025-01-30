document.addEventListener("DOMContentLoaded", function() {
    // Initialize sidebar state
    const sidebar = document.querySelector('.sidebar');
    const openBtn = document.querySelector('.open-btn');

    // Smooth scrolling with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !openBtn.contains(e.target)) {
            toggleSidebar();
        }
    });

    // Close sidebar on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });

    // Update ARIA attributes
    function updateAria() {
        const isExpanded = sidebar.classList.contains('active');
        openBtn.setAttribute('aria-expanded', isExpanded);
    }

    // Observe sidebar state changes
    const observer = new MutationObserver(updateAria);
    observer.observe(sidebar, { attributes: true });
});

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
