<template>
  <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-12 overflow-y-scroll relative">
    <SearchBar />
    <TrendNavItem />
  </div>
</template>
<script setup>
import SearchBar from "@/components/dashboard/trend-nav/SearchBar.vue";
import TrendNavItem from "@/components/dashboard/trend-nav/TrendNavItem.vue";
</script>