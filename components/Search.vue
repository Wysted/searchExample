<script setup lang="ts">
const emit = defineEmits<{
    (e: "update:value", value: string): void;
}>();

const searchText = ref<string | null>(null);

watch(searchText, (newValue) => {
    searchText.value = newValue;
    emit("update:value", searchText.value);
});
const click = () => {
    emit("update:value", searchText.value);
};
</script>

<template>
    <form
        class="Main__search"
        @submit.prevent
    >
        <input
            type="text"
            name="search"
            id="search"
            v-model="searchText"
        />
        <button
            @click="click"
            class="Icon"
            type="submit"
        >
            <IconSearch />
        </button>
    </form>
</template>

<style scoped>
.Main__search {
    display: flex;
    flex-direction: row;

    justify-content: center;
    padding: 0.3rem 1rem;
    align-items: center;
    background: #fff;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 2rem 0;
    width: 30%;
}
input {
    border: none;
    height: 35px;
    padding: 0.3rem;
    width: 100%;
}
input:active,
input:focus {
    border-radius: 8px;
}
.Icon {
    border: none;
    background: none;
    margin-left: 1rem;
}
.Icon:hover {
    opacity: 0.5;
    cursor: pointer;
}
</style>
