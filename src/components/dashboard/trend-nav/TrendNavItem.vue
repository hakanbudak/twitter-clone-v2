<template>
  <div class="w-full rounded-lg bg-gray-100 border border-lighter">
    <div class="flex item-center justify-between p-3 ">
      <p class="text-lg font-bold">Trends for You</p>
    </div>
    <button v-for="trend in trending" class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter ">
      <div>
        <p class="text-xs text-left leading-right text-gray-700"> {{trend.top}}</p>
          <p class="font-semibold text-left leading-right">{{trend.title}}</p>
        <p class="text-sm text-left leading-right text-gray-700">{{trend.bottom}}</p>
      </div>
      <div class="ml-8">
      <IconAbout />
      </div>
    </button>
    <button class="p-3 w-full hover:bg-lighter text-left text-light-blue-500 border-t border-lighter">
      Show More
    </button>
  </div>
  <!--UserItem -->
  <div class="w-full rounded-lg bg-gray-100 border border-lighter my-4">
    <div class="p-3 ">
      <p class="text-lg font-bold">Who to Follow</p>
    </div>
    <button class="w-full flex  hover:bg-lighter p-3 border-t border-lighter ">
      <IconUser />
      <div class="hidden lg:block ml-4">
        <p class="text-sm font-bold text-left">Mustafa Dalga</p>
        <p class="text-sm text-gray-500">@MustafaDalga</p>
      </div>
      <button class="lg:ml-auto text-sm text-white py-1 px-4 rounded-full border-2 ml-12 bg-black">
        Follow
      </button>
    </button>
    <button class="p-3 w-full hover:bg-lighter text-left text-light-blue-500 border-t border-lighter">
      Show More
    </button>
  </div>
</template>

<script>
import IconPlus from "@/components/icons/IconPlus.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import IconAbout from "@/components/icons/IconAbout.vue";
import IconUser from "@/components/icons/IconUser.vue";

export default {
  name: 'App',
  components: {IconUser, IconAbout, IconPlus, FontAwesomeIcon},
  data() {
    return {
      trending: [
        {top: 'Sports - Whats on the agenda', title: 'Ofsaytımsı', bottom: '129K Tweets'},
        {top: 'Turkey Whats on the agenda ?', title: 'Arda Güler', bottom: '4.800K Tweets'},
        {top: 'Sports - Whats on the agenda', title: 'Ersun Yanal', bottom: '20K Tweets'},
        {top: 'Sports - Whats on the agenda', title: '#Klasik', bottom: '146K Tweets'},
        {top: 'Sports - Whats on the agenda', title: 'Erman Toroğlu', bottom: '12.4K Tweets'},
      ],
    }
  }
};
</script>
