window.onload = () => {
    const images = document.querySelectorAll('[data-src]');
    const options = {
        root: null, // viewport
        rootMargin: '0px', // percentage of the target's visibility the observer's callback should be executed
        threshold: 0, // Margin around the roo
    };
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) { // true: target is inside root, false: otherwise
                return;
            }
            
            let image = entry.target;
            let src = image.getAttribute('data-src');
            image.setAttribute('src', src);

            // stop observing the specified target element
            imageObserver.unobserve(image);
        });
    }, options);
    
    images.forEach(image => {
        imageObserver.observe(image);
    }); 
}
