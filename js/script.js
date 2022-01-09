/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde"
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    date: "1990"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi",
    tag: "#Inspirational"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    source: "Mark Twain",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
  },
  {
    quote: "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.",
    source: "Alan Turing",
    date: "2014",
    citation: "Imitation game"
  }
];

//Random color generator, sets a new backgroundcolor every time it's run
function setRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}
/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  let randomQuote = quotes [ Math.floor ( Math.random() * quotes.length) + 1];
  return randomQuote;
}

/***
 * `printQuote` function
***/
function printQuote () {
  const quote = getRandomQuote();
  let quoteCard = "";

  //Adds <span> objects to spanObj that will later be inserted into the final paragraph tag next to the source
  let spanObj = "";
  if (Object.keys(quote).length > 2){
    //if the quote has more than 2 properties they should be put in span tags
    for (let i = 2; i < Object.keys(quote).length; i++){
      spanObj += `<span class="${ Object.keys(quote)[i] }">${ Object.values(quote)[i] }</span>`
    }
  }

  quoteCard += `
  <p class = "${Object.keys(quote)[0]}">${Object.values(quote)[0]}</p>
  <p class = "${Object.keys(quote)[1]}">${Object.values(quote)[1]} ${spanObj}</p>`;
  document.querySelector(".quote-box").innerHTML = quoteCard;
  setRandomColor();
}
//Runs printQuote every 10 seconds
setInterval(printQuote, 10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);