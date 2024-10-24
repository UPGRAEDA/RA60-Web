window.addEventListener('load', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const underline = document.querySelector('.underline');
    
    // Function to set active link and underline effect
    function setActiveLink() {
        // Get the current URL path
        const currentPage = window.location.pathname.split('/').pop();
        
        // Loop through each link to find the active one
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            
            // Add active class to the correct link
            if (linkPage === currentPage) {
                link.classList.add('active');
                
                // Position and transform the underline to pop up under the active link
                const linkRect = link.getBoundingClientRect();
                underline.style.width = `${linkRect.width}px`;
                underline.style.left = `${linkRect.left + linkRect.width / 2}px`; // Position center
                
                // Make underline pop up (scaleX from 0 to 1)
                underline.style.transform = 'translateX(-50%) scaleX(1)';
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Set active link on page load
    setActiveLink();

    // Update underline position on window resize
    window.addEventListener('resize', setActiveLink);
});
