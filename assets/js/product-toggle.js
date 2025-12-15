// Fonction pour gérer l'affichage des produits
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer tous les liens de produits
    const productLinks = document.querySelectorAll('.products-links a[data-product-id]');
    
    // Récupérer toutes les images de produits
    const allProductImages = document.querySelectorAll('.hero-left img');
    
    // Récupérer le titre du produit et la div hero-right
    const productSubtitle = document.querySelector('.product-subtitle');
    const heroRight = document.querySelector('.hero-right');

    // Initialiser hero-right comme visible par défaut
    if (heroRight) {
        heroRight.classList.add('expanded');
    }

    productLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Récupérer l'ID du produit depuis l'attribut data
            const productId = this.getAttribute('data-product-id');

            // Récupérer le nom du produit depuis l'attribut data
            const productName = this.getAttribute('data-product-name');

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
                productSubtitle.textContent = productName;
            }

            // Réinitialiser et réanimer hero-right
            if (heroRight) {
                heroRight.classList.remove('expanded');
                // Force un reflow avec setTimeout
                setTimeout(() => {
                    heroRight.classList.add('expanded');
                }, 100);
            }
        });
    });
});
