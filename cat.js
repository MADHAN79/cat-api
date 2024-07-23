document.addEventListener("DOMContentLoaded", function() {
    const catQuoteElement = document.getElementById("catQuote");
    const generateBtn = document.getElementById("generateBtn");

    function fetchCatQuote() {
        fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => { 
                document.getElementById('catQuote').innerText = data.fact;
            })
            .catch(error => {
                catQuoteElement.innerText = "Failed to fetch a new quote.";
                console.error(error);
            });
    }

    function runConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    generateBtn.addEventListener("click", function() {
        fetchCatQuote();
        runConfetti();
    });

    fetchCatQuote();
});
