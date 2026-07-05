const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuoteButton = document.querySelector("#newQuoteButton");

const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    quote: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
    author: "Albert Einstein"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Your vision will become clear only when you look into your heart. Who looks outside, dreams; who looks inside, awakens.",
    author: "Carl Jung"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    quote: "Whether you think you can, or you think you can't—you're right.",
    author: "Henry Ford"
  }
];

newQuoteButton.addEventListener("click", function (){
  let index = Math.floor(Math.random()*quotes.length);
  quote.textContent = quotes[index].quote;
  author.textContent  = "—"+ quotes[index].author;
})