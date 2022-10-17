<template>
  <div>
    <div>{{ HtmlString }}</div>
    <div v-html="HtmlString"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      HtmlString: '<p style="color:red;"> 빨간색 문자</p>'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style></style>
