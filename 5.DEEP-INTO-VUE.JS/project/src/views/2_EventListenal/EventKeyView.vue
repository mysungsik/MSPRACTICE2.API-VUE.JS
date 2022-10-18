<template>
  <div>
    <input type="text" v-model="enteredData" @keyup.enter="search" />
    <button @click="search">검색</button>
    <p>{{ look }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      enteredData: ''
    }
  },
  props: {
    look: String
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    search(event) {
      console.log(this.enteredData)
    }
  }
}
</script>

<style></style>
