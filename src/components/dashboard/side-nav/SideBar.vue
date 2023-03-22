<template>
    <div class="lg:w-1/4 flex flex-col justify-between border-r border-lighter lpx-2 lg:px-8 py-2">
      <div>
        <button class="h-12 w-12 hover:bg-light-blue-500 text-3xl rounded-full text-blue ">
          <IconTwitter />
        </button>
        <div>
          <SideBarNavigator />
        </div>
      </div>
      <div class="lg:w-full relative">
        <AccountBar />
      </div>
    </div>
</template>

<script setup>
import IconTwitter from "@/components/icons/IconTwitter.vue";
import SideBarNavigator from "@/components/dashboard/side-nav/SideBarNavigator.vue";
import AccountBar from "@/components/dashboard/side-nav/AccountBar.vue";
</script>