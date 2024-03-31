import { defineStore } from 'pinia';

export const useBlogStore = defineStore({
  id: 'blog',
  state: () => ({
    blogs: [
      { 
        id: 1,
        title: "His mother had always taught him",
        body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      },
      { 
        id: 2,
        title: "He was an expert but not in a discipline",
        body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
      },
      { 
        id: 3,
        title: "Dave watched as the forest burned up on the hill.",
        body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
      },
      
    ],
  }),
  actions: {
    addBlog(newBlog) {
      this.blogs.push(newBlog);
    },
    deleteBlog(blogId) {
      this.blogs = this.blogs.filter(blog => blog.id !== blogId);
    },
    updateBlog(updatedBlog) {
      const index = this.blogs.findIndex(blog => blog.id === updatedBlog.id);
      if (index !== -1) {
        this.blogs[index] = updatedBlog;
      }
    },
    truncateContent (content, length) {
      return content.length > length ? content.substring(0, length) + '...' : content;
    }
    
  }
});
