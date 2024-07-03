import type { Book } from "~/models/book/book.model";
export class BookService {
    async getBooks(): Promise<Array<Book> | null> {
        try {
            const response = await fetch(
                "https://gist.githubusercontent.com/nanotaboada/6396437/raw/855dd84436be2c86e192abae2ac605743fc3a127/books.json"
            );
            if (!response.ok) {
                throw new Error("Error en la respuesta");
            }
            const data = await response.json();
            return data.books as Book[];
        } catch (error) {
            console.error("Hubo un problema con la solicitud:", error);
            return null; // Retorna null en caso de error
        }
    }
}
