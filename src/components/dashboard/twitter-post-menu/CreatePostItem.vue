<template>
  <div class=" lg:border-l px-5 py-3 order-lighter flex flex-wrap items-center justify-between sm:flex-no-wrap">
    <h1 class="text-xl font-bold">Home</h1>

  <div class="grid grid-cols-2  text-center w-full">
    <button class="text-md font-bold hover:bg-gray-200 ">Size özel</button>
    <button class="text-md font-bold pb-4 pt-4 hover:bg-gray-200">Takip edilenler</button>
  </div>
  </div>
  <div class="px-5 py-3 border-b-8 border-lighter flex flex-wrap sm:flex-no-wrap border-t">
    <div class="flex-none ">
      <IconUserHome />
    </div>
    <form v-on:submit.prevent="addNewTweet" class="w-full px-4 relative">
      <textarea v-model="tweet.content" placeholder="What's up?" class="mt-3 pb-3 w-full focus:outline-none"/>
      <div class="flex items-center">
        <IconImg />
        <IconGıf />
        <IconQuestion />
        <IconEmoji />
        <IconCalendar />
        <IconMap />
      </div>
      <button class="lg:border-l h-10 px-4 text-white font-semibold bg-light-blue-500 hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
        Tweet
      </button>
    </form>
  </div>
  <div class="flex flex-col-reverse">
    <div v-for="tweet in tweets" class="w-full p-4 border-b hover:bg-lighter flex flex-wrap sm:flex-no-wrap">
      <div class="flex-none mr-4">
       <IconUser />
      </div>
      <div class="w-full">
        <div class="flex items-center w-full">
          <p class="font-semibold"> Hakan Budak </p>
          <p class="text-sm text-dark ml-2"> @Hakan </p>
          <p class="text-sm text-dark ml-2"> 1 sec </p>
          <IconAbout />
        </div>
        <p class="py-2">
          {{ tweet.content }}
        </p>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center text-sm text-dark">
            <IconComment />
            <p> 3120 </p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <IconRetweet />
            <p> 200 </p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <IconHeart />
            <p> 70M </p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <IconShare />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-for="follow in following" class="w-full p-4 border-b hover:bg-lighter flex flex-wrap sm:flex-no-wrap">
    <div class="flex-none mr-4">
      <img :src="`${follow.src}`" class="h-12 w-12 rounded-full flex-none"/>
    </div>
    <div class="w-full">
      <div class="flex items-center w-full">
        <p class="font-semibold"> {{ follow.name }} </p>
        <p class="text-sm text-dark ml-2"> {{ follow.handle }} </p>
        <p class="text-sm text-dark ml-2"> {{ follow.time }} </p>
        <i class="fas fa-angle-down text-dark ml-auto"></i>
      </div>
      <p class="py-2">
        {{ follow.tweet }}
      </p>
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center text-sm text-dark">
          <IconComment />
          <p> {{ follow.comments }} </p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <IconRetweet />
          <p> {{ follow.retweets }} </p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <IconHeart />
          <p> {{ follow.like }} </p>
        </div>
        <div class="flex items-center text-sm text-dark">
          <IconShare />
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import IconUserHome from "@/components/icons/IconUserHome.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import IconImg from "@/components/icons/IconImg.vue";
import IconGıf from "@/components/icons/IconGıf.vue";
import IconQuestion from "@/components/icons/IconQuestion.vue";
import IconEmoji from "@/components/icons/IconEmoji.vue";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconMap from "@/components/icons/IconMap.vue";
import IconComment from "@/components/icons/IconComment.vue";
import IconRetweet from "@/components/icons/IconRetweet.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconIstatistic from "@/components/icons/IconIstatistic.vue";
import IconShare from "@/components/icons/IconShare.vue";
import IconAbout from "@/components/icons/IconAbout.vue";
import IconUser from "@/components/icons/IconUser.vue";
export default {
  name: 'App',
  components: {
    IconUser,
    IconAbout,
    IconShare,
    IconIstatistic,
    IconHeart,
    IconRetweet,
    IconComment,
    IconMap, IconCalendar, IconEmoji, IconQuestion, IconGıf, IconImg, IconUserHome, FontAwesomeIcon},
  data() {
    return {
      following: [
        {src: 'src/assets/images/ecem.svg', name: 'Ecem Yıldız', handle: '@ecem', time: '1 hr', tweet: '" If you need blood, say you vomited and drank bloody mary, but we still wont give anyone a trump card"', comments: '1,000', retweets: '100M', like: '59M'},
        {src: 'src/assets/images/abdullah.svg', name: 'Abdullah Külcü', handle: '@abdullah', time: '1.2 hr', tweet: 'Looking for new technologies', comments: '2,030', retweets: '50', like: '3M'},
        {src: 'src/assets/images/emrehan.svg', name: 'Emrehan Aydin', handle: '@emrehan', time: '1.8 hr', tweet: 'Haha just made a flame thrower. Shld I sell them?', comments: '100,000', retweets: '1M', like: '5,000,003'},
        {src: 'src/assets/images/mustafa.svg', name: 'Mustafa Dalga', handle: '@mustafa', time: '12 hr', tweet: 'Whatever you do. do your best', comments: '100,500', retweets: '12M', like: '5M'},
        {src: './ece.jpeg', name: 'Ece Kürüm', handle: '@ece', time: '17 hr', tweet: 'Whatever', comments: '3K', retweets: '2K', like: '8M'}

      ],
      tweets: [
        {content: 'Çanakkale Zaferi, Türk askerinin ruh kudretini gösteren şayanı hayret ve tebrik bir misaldir. Emin olmalısınız ki, Çanakkale muharebelerini kazandıran bu yüksek ruhtur.'}
      ],
      tweet: {content: ''}
    }
  },
  methods: {
    addNewTweet () {
      let newTweet = {
        content: this.tweet.content
      };
      this.tweets.push (newTweet)
    }
  }
};
</script>