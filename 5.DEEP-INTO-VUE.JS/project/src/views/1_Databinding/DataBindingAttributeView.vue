<template>
  <div>
    <div>
      <!-- 양방향이 되지 않도록, v-model 대신, v-bind 로 단방향 데이터바인딩으로 만들어줌 -->
      <input type="text" v-bind:value="userId" readonly />
      <br />
      <!-- v-bind 생략가능 -->
      <input type="text" :value="userId" readonly />
      <img :src="imgSrc" alt="img" style="width: 300px; height: 300px" />
    </div>
    <div>
      <input type="text" name="" id="" v-model="text1" />
      <button :disabled="text1 === ''">조회</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userId: 'yes',
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
      text1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style>
img {
  display: block;
  margin: 1rem auto;
}
</style>
