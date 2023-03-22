

<template>
    <div class="flex container h-screen w-full">
      <SideBar />
      <PostMenu />
      <TrendNav />
    </div>
</template>


<script setup>
import SideBar from "@/components/dashboard/side-nav/SideBar.vue";
import PostMenu from "@/components/dashboard/twitter-post-menu/PostMenu.vue";
import TrendNav from "@/components/dashboard/trend-nav/TrendNav.vue";
</script>