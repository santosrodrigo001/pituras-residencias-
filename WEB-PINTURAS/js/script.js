// You can add JavaScript for interactive elements here.
// For example, smooth scrolling for navigation links.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image group rotation for Pintura Interna
document.addEventListener('DOMContentLoaded', () => {
    const internaImageGroups = document.querySelectorAll('.pintura-interna-grid .image-group');
    let currentInternaGroupIndex = 0;

    function showInternaGroup(index) {
        internaImageGroups.forEach((group, i) => {
            if (i === index) {
                group.classList.add('active');
            } else {
                group.classList.remove('active');
            }
        });
    }

    function nextInternaGroup() {
        currentInternaGroupIndex = (currentInternaGroupIndex + 1) % internaImageGroups.length;
        showInternaGroup(currentInternaGroupIndex);
    }

    // Show the first group initially
    if (internaImageGroups.length > 0) {
        showInternaGroup(currentInternaGroupIndex);
    }

    // Change group every 3 seconds
    setInterval(nextInternaGroup, 3000);

    // Image group rotation for Pintura Externa
    const externaImageGroups = document.querySelectorAll('.pintura-externa-grid .image-group');
    let currentExternaGroupIndex = 0;

    function showExternaGroup(index) {
        externaImageGroups.forEach((group, i) => {
            if (i === index) {
                group.classList.add('active');
            } else {
                group.classList.remove('active');
            }
        });
    }

    function nextExternaGroup() {
        currentExternaGroupIndex = (currentExternaGroupIndex + 1) % externaImageGroups.length;
        showExternaGroup(currentExternaGroupIndex);
    }

    // Show the first group initially
    if (externaImageGroups.length > 0) {
        showExternaGroup(currentExternaGroupIndex);
    }

    // Change group every 3 seconds
    setInterval(nextExternaGroup, 3000);

    // Image group rotation for Texturas e Efeitos
    const texturasImageGroups = document.querySelectorAll('.texturas-e-efeitos-grid .image-group');
    let currentTexturasGroupIndex = 0;

    function showTexturasGroup(index) {
        texturasImageGroups.forEach((group, i) => {
            if (i === index) {
                group.classList.add('active');
            } else {
                group.classList.remove('active');
            }
        });
    }

    function nextTexturasGroup() {
        currentTexturasGroupIndex = (currentTexturasGroupIndex + 1) % texturasImageGroups.length;
        showTexturasGroup(currentTexturasGroupIndex);
    }

    // Show the first group initially
    if (texturasImageGroups.length > 0) {
        showTexturasGroup(currentTexturasGroupIndex);
    }

    // Change group every 3 seconds
    setInterval(nextTexturasGroup, 3000);

    // Image group rotation for Madeiras e Ferragens
    const madeirasImageGroups = document.querySelectorAll('.madeiras-e-ferragens-grid .image-group');
    let currentMadeirasGroupIndex = 0;

    function showMadeirasGroup(index) {
        madeirasImageGroups.forEach((group, i) => {
            if (i === index) {
                group.classList.add('active');
            } else {
                group.classList.remove('active');
            }
        });
    }

    function nextMadeirasGroup() {
        currentMadeirasGroupIndex = (currentMadeirasGroupIndex + 1) % madeirasImageGroups.length;
        showMadeirasGroup(currentMadeirasGroupIndex);
    }

    // Show the first group initially
    if (madeirasImageGroups.length > 0) {
        showMadeirasGroup(currentMadeirasGroupIndex);
    }

    // Change group every 3 seconds
    setInterval(nextMadeirasGroup, 3000);

    // Image group rotation for Gesso e Sancas
    const gessoImageGroups = document.querySelectorAll('.gesso-e-sancas-grid .image-group');
    let currentGessoGroupIndex = 0;

    function showGessoGroup(index) {
        gessoImageGroups.forEach((group, i) => {
            if (i === index) {
                group.classList.add('active');
            } else {
                group.classList.remove('active');
            }
        });
    }

    function nextGessoGroup() {
        currentGessoGroupIndex = (currentGessoGroupIndex + 1) % gessoImageGroups.length;
        showGessoGroup(currentGessoGroupIndex);
    }

    // Show the first group initially
    if (gessoImageGroups.length > 0) {
        showGessoGroup(currentGessoGroupIndex);
    }

    // Change group every 3 seconds
    setInterval(nextGessoGroup, 3000);

    // Manual scrolling for Inspiration Gallery
const inspirationGrid = document.querySelector('.inspiration-grid');
const prevButton = document.querySelector('.inspiration-gallery-section .scroll-button.prev');
const nextButton = document.querySelector('.inspiration-gallery-section .scroll-button.next');
const inspirationImages = document.querySelectorAll('.inspiration-grid img');

if (inspirationGrid && prevButton && nextButton && inspirationImages.length > 0) {

    const updateActiveImage = () => {
        const gridRect = inspirationGrid.getBoundingClientRect();
        const gridCenter = gridRect.left + gridRect.width / 2;

        let closestImage = null;
        let minDistance = Infinity;

        inspirationImages.forEach(image => {
            const imageRect = image.getBoundingClientRect();
            const imageCenter = imageRect.left + imageRect.width / 2;
            const distance = Math.abs(gridCenter - imageCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestImage = image;
            }
        });

        inspirationImages.forEach(img => img.classList.remove('active-center'));
        if (closestImage) {
            closestImage.classList.add('active-center');
        }
    };

    // Initial call
    updateActiveImage();

    // Update on scroll
    inspirationGrid.addEventListener('scroll', updateActiveImage);

    prevButton.addEventListener('click', () => {
        const currentActive = document.querySelector('.inspiration-grid img.active-center');
        if (currentActive) {
            const currentIndex = Array.from(inspirationImages).indexOf(currentActive);
            const targetIndex = Math.max(0, currentIndex - 1);
            const targetImage = inspirationImages[targetIndex];

            if (targetImage) {
                // Calculate scroll position to center the target image
                const scrollLeft = targetImage.offsetLeft - (inspirationGrid.offsetWidth / 2) + (targetImage.offsetWidth / 2);
                inspirationGrid.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        } else {
            // If no active image, scroll to the beginning
            inspirationGrid.scrollTo({ left: 0, behavior: 'smooth' });
        }
    });

    nextButton.addEventListener('click', () => {
        const currentActive = document.querySelector('.inspiration-grid img.active-center');
        if (currentActive) {
            const currentIndex = Array.from(inspirationImages).indexOf(currentActive);
            const targetIndex = Math.min(inspirationImages.length - 1, currentIndex + 1);
            const targetImage = inspirationImages[targetIndex];

            if (targetImage) {
                // Calculate scroll position to center the target image
                const scrollLeft = targetImage.offsetLeft - (inspirationGrid.offsetWidth / 2) + (targetImage.offsetWidth / 2);
                inspirationGrid.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        } else {
            // If no active image, scroll to the end
            inspirationGrid.scrollTo({ left: inspirationGrid.scrollWidth, behavior: 'smooth' });
        }
    });
}
});
