function quotes() {
  const quoteList = [
    "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    "When something is important enough, you do it even if the odds are not in your favor.",
    "I knew that if I failed, I wouldn't regret that, but I knew the one thing I might regret is not trying.",
    "The difference between successful people and really successful people is that really successful people say no to almost everything.",
    "The biggest risk is not taking any risk.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "If you don’t find a way to make money while you sleep, you will work until you die.",
    "I always knew I was going to be rich. I don’t think I ever doubted it for a minute.",
    "It’s fine to celebrate success, but it is more important to heed the lessons of failure.",
    "I don’t believe in taking right decisions. I take decisions and then make them right.",
    "If you’re not embarrassed by the first version of your product, you’ve launched too late.",
    "The question I ask myself like almost every day is, 'Am I doing the most important thing I could be doing?'",
    "Some people dream of success, while others wake up and work hard at it.",
    "Chase the vision, not the money. The money will end up following you.",
    "Opportunities don’t happen. You create them.",
    "I believe in the power of small loans to change the world, and I believe in the power of people to create a better future.",
    "The goal of a business is not only to make a profit but to help people to achieve their full potential.",
  ];
  let quote = Math.floor(Math.random() * quoteList.length);
  return quoteList[quote];
}

const updateQuote = function () {
  let quoteValue = quotes();
  const quoteDisplay = document.getElementById("display");
  const showDisplay = (quoteDisplay.innerText = quoteValue);
  return showDisplay;
};

document.getElementById("quote-btn").addEventListener("click", function () {
  updateQuote();
});
