<template>
  <div>
    <h2>Add Blog</h2>
    <form @submit.prevent="addBlog">
      <label for="title">Title:</label>
      <input type="text" v-model="title" required><br>
      <label for="content">Content:</label><br>
      <textarea v-model="content" required></textarea><br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useBlogStore } from '../store/index.js';

const store = useBlogStore();
const title = ref('');
const content = ref('');

const addBlog = () => {
  const newBlog = { id: Date.now(), title: title.value, content: content.value };
  store.addBlog(newBlog);
  title.value = '';
  content.value = '';
};
</script>
