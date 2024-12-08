// Open Modal with Image
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const imageSrc = item.querySelector('img').src;
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');
        const captionText = document.getElementById('modal-caption');
        
        modal.style.display = 'block';
        modalImg.src = imageSrc;
        captionText.innerHTML = item.querySelector('img').alt;
    });
});

// Close Modal
document.getElementById('close-modal').addEventListener('click', function() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
});

// Close Modal if clicked outside the image
window.addEventListener('click', function(event) {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
