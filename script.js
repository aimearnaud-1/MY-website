
document.getElementById("amazonSearchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const query = document.getElementById("searchInput").value.trim();

    if (query !== "") {
        const affiliateTag = "yourtag-20"; // ← aha ushyire affiliate tag yawe
        const amazonUrl = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${affiliateTag}`;

        window.open(amazonUrl, "_blank");
    }
});
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');

            // Amazon base search link
            const amazonUrl = `https://www.amazon.com/s?k=${category}`;

            // Open Amazon in new tab
            window.open(amazonUrl, '_blank');
        });
    });
