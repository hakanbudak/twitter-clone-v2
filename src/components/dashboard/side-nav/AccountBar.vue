<template>
  <div>
    <button class="flex item-center hover:bg-gray-200 rounded-full py-2">
      <IconUser />
      <div class="hidden lg:block ml-4">
        <p class="text-sm font-bold text-left">Hakan</p>
        <p class="text-sm text-gray-500">@hakanbudakk</p>
      </div>
      <div class="pt-2">
        <IconAbout />
      </div>
    </button>
  </div>

</template>
<script setup>
import IconUser from "@/components/icons/IconUser.vue";
import IconAbout from "@/components/icons/IconAbout.vue";
</script>