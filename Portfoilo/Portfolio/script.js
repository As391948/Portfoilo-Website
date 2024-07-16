document.addEventListener('DOMContentLoaded', function() {
    // Get the body element
    const body = document.querySelector('body');

    // Check the current page URL and set the appropriate background image class
    if (window.location.pathname.includes('introduction.html')) {
        body.classList.add('introduction-page');
    } else if (window.location.pathname.includes('projects.html')) {
        body.classList.add('projects-page');
    } else {
        body.classList.add('home-page'); // Default to home page
    }
});