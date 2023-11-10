<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>

    <!-- Image Carousel -->
    <h3>Image Carousel</h3>
    <carousel :perPage="1" :navigationEnabled="true">
      <!-- Carousel Slides -->
      <slide v-for="(image, index) in carouselImages" :key="index">
        <img :src="image.src" :alt="image.alt">
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      carouselImages: [
        { src: 'https://media.licdn.com/dms/image/D4D22AQE5rMizVlUFLA/feedshare-shrink_2048_1536/0/1693558425986?e=1702512000&v=beta&t=4j4_byxFupGofkhEuArqgbuV8VvfSJ2UXmuvdKGKrNk', alt: 'Image 1' },
        { src: 'https://media.licdn.com/dms/image/D4D22AQGyHahaXg-WjQ/feedshare-shrink_2048_1536/0/1693638324907?e=1702512000&v=beta&t=mviGlqBIgQAAwef9fiTvaz9qTdN_FQhEo8lC7lwrtls', alt: 'Image 2' },
        { src: 'https://media.licdn.com/dms/image/D4D22AQEILC3cQn9q9A/feedshare-shrink_2048_1536/0/1693334389420?e=1702512000&v=beta&t=_yXcY77N-tw2y-3yzcyHDFE9bFETUuhOm_REo0xH-g8', alt: 'Image 3' },
        { src: 'https://media.licdn.com/dms/image/D4D22AQGlnJ0t8OlcLw/feedshare-shrink_2048_1536/0/1693240693365?e=1702512000&v=beta&t=D51qhRD2ZSjRBGBv6FRQXoDPw84dVU0wfPSrFoKSN5A', alt: 'Image 4' },
        { src: 'https://media.licdn.com/dms/image/D4D22AQFzqOptlRmYXg/feedshare-shrink_2048_1536/0/1693240693948?e=1702512000&v=beta&t=WaDkiGYo5qAnRB7b6Zp6uaS2gbDHVoTF3ujBf5mk2Dk', alt: 'Image 5' },
        // Add more image links as needed
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* Styles for the Image Carousel */
.carousel {
  width: 100%;
  max-width: 600px; /* Adjust the maximum width as needed */
  margin: 20px auto;
}

.carousel img {
  width: 100%;
  height: auto;
}
</style>
