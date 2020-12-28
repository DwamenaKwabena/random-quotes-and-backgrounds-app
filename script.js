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
const body = document.querySelector("body");
const quote = document.querySelector("#quote");
const author = document.querySelector("#quoteAuthor");

let colors = ["rgb(3,19,33)", "rgb(134,13,22)", "orange", "#0EE351"];

button.addEventListener("click", displayQuote);

function displayQuote() {
  let quotePicker = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[quotePicker].name;
  author.innerHTML = quotes[quotePicker].quote;
}

button.addEventListener("click", changeColor);
function changeColor() {
  let colorPicker = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorPicker];
}
