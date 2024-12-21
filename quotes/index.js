let quotes = [
    "Life is what happens when you're busy making other plans. – John Lennon",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    "Life is really simple, but we insist on making it complicated. – Confucius",
    "Keep smiling, because life is a beautiful thing and there’s so much to smile about. – Marilyn Monroe",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "Life isn’t about waiting for the storm to pass, it’s about learning to dance in the rain. – Vivian Greene"
]

function slider() {
    let textElements = document.getElementById("quote");
      textElements.innerText = quotes[Math.floor(Math.random() * quotes.length)];
    
  }
  
  setInterval(() => {
    slider();
  }, 3000);