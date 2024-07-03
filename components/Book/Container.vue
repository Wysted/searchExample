<script setup lang="ts">
import { defineProps } from "vue";
import type { Book } from "~/models/book/book.model";
defineProps<{
    book: Book;
}>();
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <h6 class="card-subtitle">{{ book.subtitle }}</h6>
            <p class="card-text"><strong>Author:</strong> {{ book.author }}</p>
            <p class="card-text">
                <strong>Published:</strong> {{ book.published }}
            </p>
            <p class="card-text">
                <strong>Publisher:</strong> {{ book.publisher }}
            </p>
            <p class="card-text"><strong>Pages:</strong> {{ book.pages }}</p>
            <p class="card-text">{{ book.description }}</p>
            <a
                :href="book.website"
                class="card-link"
                target="_blank"
                >More info</a
            >
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 1rem;
    padding: 1rem;
    max-width: 300px;
}

.card-body {
    display: flex;
    flex-direction: column;
}

.card-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
}

.card-subtitle {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
}

.card-text {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: #333;
}

.card-link {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #007bff;
    text-decoration: none;
}

.card-link:hover {
    text-decoration: underline;
}
</style>
