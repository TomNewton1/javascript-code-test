import { http, HttpResponse } from "msw";
import { allBooks } from "./fixtures";

export const handlers = [
  http.get("http://api.book-seller-example.com/by-author", ({ request }) => {
    const url = new URL(request.url);
    const author = url.searchParams.get("q");
    const limit = parseInt(url.searchParams.get("limit") || "10", 10);
    const format = url.searchParams.get("format");

    // If json format is requested, return the filtered books
    if (format === "json") {
      const filteredBooks = allBooks
        .filter(
          (book) => book.book.author.toLowerCase() === author?.toLowerCase()
        )
        .slice(0, limit);

      return HttpResponse.json(filteredBooks, { status: 200 });
    }

    // If xml format is requested, return XML response
    if (format === "xml") {
      // Handle XML response
      return HttpResponse.xml("<books></books>", { status: 200 });
    }

    // Default response if format is not specified
    return HttpResponse.json({ error: "Invalid format" }, { status: 400 });
  }),
];
