document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, null, `#${targetId}`);
        }
    });
});


if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

