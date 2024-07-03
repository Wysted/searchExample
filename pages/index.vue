<script setup lang="ts">
import type { Book } from "~/models/book/book.model";
import { BookService } from "~/services/book.service";

const $bookService = new BookService();
const books = ref<Array<Book> | null>(null);
const filteredBooks = ref<Array<Book> | null>(null);

onMounted(async () => {
    books.value = await $bookService.getBooks();
    filteredBooks.value = books.value;
});

const searchBook = async (value: string) => {
    const text = value.toLowerCase();
    if (text) {
        filteredBooks.value = books.value.filter((book) => {
            const bookTittle = book.title.toLowerCase();
            const bookPubliser = book.publisher.toLowerCase();
            const bookAuthor = book.author.toLowerCase();
            const bookDescription = book.description.toLowerCase();

            return (
                bookTittle.includes(text) ||
                bookPubliser.includes(text) ||
                bookAuthor.includes(text) ||
                bookDescription.includes(text)
            );
        });
    } else {
        filteredBooks.value = books.value;
    }
};
</script>
<template>
    <div class="Main">
        <header class="Header">
            <h1>Buscador de libros</h1>
            <p>Pone el titulo, descripcion o editorial de que quieras buscar</p>
        </header>
        <section class="Search"><Search @update:value="searchBook" /></section>
        <section class="Books">
            <BookContainer
                v-for="(book, index) in filteredBooks"
                :key="index"
                :book="book"
            />
        </section>
    </div>
</template>

<style scoped>
.Header {
    display: flex;
    padding: 1rem 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.Search {
    display: flex;
    justify-content: center;
    width: 100%;
}
.Books {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}
</style>
