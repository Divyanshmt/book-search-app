export const URLBuilder = {
  imageUrl: (cover: string) =>
    `http://covers.openlibrary.org/b/id/${cover}-L.jpg`,
  searchUrl: (searchTerm: string, limit: number) =>
    `https://openlibrary.org/search.json?q=${encodeURIComponent(
      searchTerm
    )}&limit=${limit}`,
};
