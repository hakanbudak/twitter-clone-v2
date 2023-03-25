<template>
  <div id="App">
    <button v-for="tab in tabs" @click="id = tab.id" :class="`focus:outline-none  hover:bg-gray-200 flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${ id === tab.id ? 'text-light-blue-500' : ''}`">
      <font-awesome-icon :icon="`${ tab.icon }`" :size="'xl'"></font-awesome-icon>
      <p class="text-lg font-semibold text-left pl-2 hidden lg:block"> {{ tab.title }} </p>
    </button>
  </div>
    <button class="rounded-full bg-light-blue-500 text-white font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-light-blue-400">
     <p class="hidden lg:block">Tweet</p>
      <IconPlus />
    </button>
</template>

<script>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import IconPlus from "@/components/icons/IconPlus.vue";

export default {
  name: 'App',
  components: {IconPlus, FontAwesomeIcon},
  data() {
    return {
      tabs: [
        {icon: 'fa-solid fa-house fa-10x', title: 'Home', id: 'home'},
        {icon: 'fa-solid fa-hashtag', title: 'Explore', id: 'explore'},
        {icon: 'fa-solid fa-bell', title: 'Notifications', id: 'notifications'},
        {icon: 'fa-solid fa-envelope', title: 'Messages', id: 'messages'},
        {icon: 'fa-solid fa-bookmark', title: 'Bookmarks', id: 'bookmarks'},
        {icon: 'fa-solid fa-heart', title: 'Twitter Blue', id: 'lists'},
        {icon: 'fa-solid fa-user', title: 'Profile', id: 'profile'},
        {icon: 'fa-solid fa-ellipsis', title: 'More', id: 'more'}
      ],
      id: 'home',
      trending: [
        {top: 'Trending in TX', title: 'Gigi', bottom: 'Trending with: Rip Gigi'},
        {top: 'Music', title: 'We Won', bottom: '135K Tweets'},
        {top: 'Pop', title: 'Blue Ivy', bottom: '40k tweets'},
        {top: 'Trending in US', title: 'Denim Day', bottom: '40k tweets'},
        {top: 'Trending', title: 'When Beyonce', bottom: '25.4k tweets'},
      ],
    }
  }
};
</script>