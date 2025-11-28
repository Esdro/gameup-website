// Fonction pour gérer l'affichage des produits
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer tous les liens de produits
    const productLinks = document.querySelectorAll('.products-links a[data-product-id]');
    
    // Récupérer toutes les images de produits
    const allProductImages = document.querySelectorAll('.hero-left img');
    
    // Récupérer le titre du produit et la div hero-bottom
    const productSubtitle = document.querySelector('.product-subtitle');
    const heroBottom = document.querySelector('.hero-bottom');

    // Initialiser hero-bottom comme visible par défaut
    if (heroBottom) {
        heroBottom.classList.add('expanded');
    }

    productLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Récupérer l'ID du produit depuis l'attribut data
            const productId = this.getAttribute('data-product-id');

            // Masquer toutes les images
            allProductImages.forEach(img => {
                img.classList.remove('visible');
                img.classList.add('hidden');
            });

            // Afficher uniquement l'image correspondante
            const targetImage = document.getElementById(productId);
            if (targetImage) {
                targetImage.classList.remove('hidden');
                targetImage.classList.add('visible');
            }

            // Changer le titre du produit
            if (productSubtitle) {
                productSubtitle.textContent = `Product ${productId}`;
            }

            // Réinitialiser et réanimer hero-bottom
            if (heroBottom) {
                heroBottom.classList.remove('expanded');
                // Force un reflow pour réinitialiser l'animation
                void heroBottom.offsetHeight;
                heroBottom.classList.add('expanded');
            }
        });
    });
});
