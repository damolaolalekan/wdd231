export async function loadQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();

    document.getElementById("quote-text").textContent =
      `"${data.content}" — ${data.author}`;
  } catch (error) {
    document.getElementById("quote-text").textContent =
      "Could not load quote.";
  }
}

loadQuote();