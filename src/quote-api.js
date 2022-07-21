export async function updateQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    return {
      quote: data.content,
      author: data.author,
    };
  } else {
    console.log(data);
    return {
      quote: "An error occured",
      author: "Your App",
    };
  }
}
