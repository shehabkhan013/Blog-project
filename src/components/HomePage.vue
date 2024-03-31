<template>
  <div>
    <h1 class="text-3xl font-bold underline text-center mt-10">Blog Home Page</h1>
    <div class="flex gap-20 items-center justify-center px-24 mt-10">
      <button @click="toggleForm" class="inline-block mx-auto bg-gray-200 rounded-full px-4 py-3 text-sm font-semibold text-gray-700 mb-2">Add Blog</button>
    </div>
    <div class="pt-15 p-24 pb-0 overflow-hidden" v-if="openBlog">
      <h2 class="font-bold text-xl mb-2">Add Blog</h2>
      <!-- Add Blog Form -->
      <form @submit.prevent="addBlog">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
        <input type="text" v-model="title" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Content:</label>
        <textarea v-model="body" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        <button type="submit" class="inline-block bg-green-200 rounded-full px-5 py-3 text-md font-semibold text-gray-700 mt-4">Submit</button>
      </form>
    </div>
    <!-- Blog List -->
    <div class="grid grid-cols-3 gap-20 items-center justify-between p-24">
      <div class="max-w-md rounded overflow-hidden shadow-lg" v-for="blog in blogs" :key="blog.id">
        <!-- Editable Title -->
        <div v-if="!blog.editMode">
          <div class="p-4">
            <h2 class="font-bold text-xl mb-2">{{ blog.title }}</h2>
            <p class="text-gray-700 text-base mb-5">{{ store.truncateContent(blog.body, 150) }}</p>
            <router-link class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2":to="{ path: `/blog/${blog.id}` }">See More</router-link>
            <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" @click="toggleEditMode(blog)">Edit</button>
            <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" @click="deleteBlogHandler(blog.id)">Delete</button>
          </div>
         
        </div>
        <div v-else>
          <div class="p-4">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
            <input type="text" id="title" v-model="blog.title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <label for="body" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body:</label>
            <textarea id="body" v-model="blog.body" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
            <div class="d-flex items-center justify-between mt-4">
              <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"  @click="updateBlogHandler(blog)">Update</button>
              <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"@click="toggleEditMode(blog)">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useBlogStore } from '../store/index.js';

const store = useBlogStore();
const blogs = store.blogs;

const title = ref('');
const body = ref('');
const openBlog = ref(false);

// Add Blog Function
const addBlog = () => {
  const newBlog = { id: Date.now(), title: title.value, body: body.value };
  store.addBlog(newBlog);
  title.value = '';
  body.value = '';
  openBlog.value = false;
};

// Delete Blog Function
const deleteBlogHandler = (blogId) => {
  store.deleteBlog(blogId);
};

// Toggle Edit Mode Function
const toggleEditMode = (blog) => {
  blog.editMode = !blog.editMode;
};

// Update Blog Function
const updateBlogHandler = (blog) => {
  toggleEditMode(blog);
  store.updateBlog(blog);
};

const toggleForm = () => {
  openBlog.value = !openBlog.value;
}
</script>
