const API_KEY =
  "$2y$10$qSQzGL8GxgFsxQDqeb7MMe9mzdAfCNf2dOorH6mokC70Unhfli";

export const fetchHadithBooks = async () => {
  const response = await fetch(
    `https://hadithapi.com/api/books?apiKey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const json = await response.json();

  const filteredBooks = json.books.filter(
    (book) => book.id !== 9 && book.id !== 10
  );

  return filteredBooks;
};
