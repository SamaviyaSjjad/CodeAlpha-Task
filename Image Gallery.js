const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const images = document.querySelectorAll('.gallery img');
let currentIndex = 0;

// Open lightbox
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'flex';
    updateLightboxImage();
}

// Close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Change image in lightbox
function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Loop to last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Loop to first image
    }

    updateLightboxImage();
}

// Update the lightbox image
function updateLightboxImage() {
    lightboxImage.src = images[currentIndex].src;
}
