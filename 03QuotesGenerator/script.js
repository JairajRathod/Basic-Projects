

const apiURL = "https://api.quotable.io/random";

async function randomQuoteAPI(apiURL){
    
    const responce = await fetch(apiURL);
    let data = await responce.json();

    document.querySelector('#quoteText').innerHTML = data.content;
    document.querySelector('#authorNameText').innerHTML = data.author;

}

randomQuoteAPI(apiURL);

function generateRandomQuote(){
    randomQuoteAPI(apiURL);
}