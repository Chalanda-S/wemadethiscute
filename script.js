// Toggle story sidebar
function toggleStory() {
    const sidebar = document.getElementById('story-sidebar');
    sidebar.classList.toggle('active');
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effects to navigation links
document.querySelectorAll('nav ul a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = 'var(--accent-color)';
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = 'var(--text-color)';
    });
});

// Add hover effects to pin cards
document.querySelectorAll('.pin-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.querySelector('.back-to-top-btn');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); 