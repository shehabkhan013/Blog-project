<template>
  <div class="w-full max-w-5xl p-6 rounded overflow-hidden shadow-lg mx-auto">
    <h2 class="font-bold text-xl mb-2">{{ blog.title }}</h2>
    <p class="text-gray-700 text-base mb-5">{{ blog.body }}</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useBlogStore } from '../store/index.js';

const route = useRoute();
const store = useBlogStore();
const blogId = Number(route.params.id);
const blog = store.blogs.find(blog => blog.id === blogId);
</script>
