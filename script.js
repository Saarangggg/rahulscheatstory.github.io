document.addEventListener('DOMContentLoaded', function() {
    // Handle Instagram button click
    const instagramButton = document.querySelector('.btn-instagram');
    instagramButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your actual Instagram URL
        window.location.href = 'https://www.instagram.com/thedynamicsphere/';
    });
    
    // For mobile optimization
    const adjustImagesForMobile = () => {
        if (window.innerWidth <= 767) {
            const imageContainers = document.querySelectorAll('.image-container');
            imageContainers.forEach(container => {
                container.style.maxHeight = '250px';
                container.style.overflow = 'hidden';
            });
        } else {
            const imageContainers = document.querySelectorAll('.image-container');
            imageContainers.forEach(container => {
                container.style.maxHeight = 'none';
            });
        }
    };
    
    // Run on load and resize
    adjustImagesForMobile();
    window.addEventListener('resize', adjustImagesForMobile);
});