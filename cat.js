document.addEventListener('DOMContentLoaded', () => {
    fetchCatFact();
    document.getElementById('generateBtn').addEventListener('click', () => {
        fetchCatFact();
        runConfetti();
    });
});

function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('catFact').innerText = data.fact;
        })
        .catch(error => console.error('Error fetching cat fact:', error));
}

function runConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
