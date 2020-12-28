const quotes = [
  {
    name: "T S Elliot",
    quote: "Every moment is a fresh beginning.",
  },
  {
    name: "Soren Kierkegaard",
    quote:
      "Life can only be understood backwards, but it must be lived forwards.",
  },
  {
    name: "Leonardo Da Vinci",
    quote: "Simplicity is the ultimate sophistication.",
  },
  {
    name: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
  },
  {
    name: "Eleanor Roosevelt",
    quote:
      "If life were predictable, it would cease to be life and be without flavor.",
  },
];

const button = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const author = document.querySelector("#quoteAuthor");

button.addEventListener("click", displayQuote);

function displayQuote() {
  let picker = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[picker].name;
  author.innerHTML = quotes[picker].quote;
}
