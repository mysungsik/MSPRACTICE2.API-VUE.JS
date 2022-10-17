<template>
  <div>
    <div>
      <input type="text" v-model="userInputData" />
      <p>{{ userInputData }}</p>
      <button @click="myfunction">클릭</button>
    </div>
    <div>
      <input type="number" v-model="num1" /> +
      <input type="number" v-model="num2" /> =
      <p>{{ num1 + num2 }}</p>
    </div>
    <div>
      <input type="number" v-model.number="num3" /> +
      <input type="number" v-model.number="num4" /> =
      <p>{{ num3 + num4 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userInputData: '',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myfunction() {
      console.log(this.userInputData)
    }
  }
}
</script>

<style></style>
