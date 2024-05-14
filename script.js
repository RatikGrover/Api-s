function getRandomImage() {
    return fetch('https://source.unsplash.com/random/720x400')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.url;
        })
        .catch(error => {
            console.error('Error fetching random image:', error);
            return 'placeholder.jpg'; // Replace with a fallback image URL
        });
}

async function updateCardImage(cardId) {
    try {
        const imageUrl = await getRandomImage();
        const card = document.getElementById(cardId);
        if (!card) {
            throw new Error(`Card element with id '${cardId}' not found`);
        }
        const imgElement = card.querySelector('img');
        if (!imgElement) {
            throw new Error(`Image element inside card '${cardId}' not found`);
        }
        imgElement.src = imageUrl;
    } catch (error) {
        console.error('Error updating card image:', error);
    }
}

// quote
async function randomQuote(quoteText,quoteAuthor) {
    const response = await fetch('https://api.quotable.io/random');
    const quote = await response.json();
    // Update HTML elements with the fetched quote and author
    document.getElementById(quoteText).textContent = quote.content;
    document.getElementById(quoteAuthor).textContent = '~' + quote.author;
}


    // Update each card with a unique image
    updateCardImage('card1');
    updateCardImage('card2');
    updateCardImage('card3');
    randomQuote('quoteText1','quoteAuthor1');
    randomQuote('quoteText2','quoteAuthor2');
    randomQuote('quoteText3','quoteAuthor3');

