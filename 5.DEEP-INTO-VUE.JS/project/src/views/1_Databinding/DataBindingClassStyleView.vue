<template>
  <div>
    <div>
      <p>클래스 바인딩</p>
      <p :class="{ fontclass: true, colorclass: false }">클래스</p>
      <h1 :class="{ bigclass: istrue }">새로운 클래스</h1>
      <button @click="istrue = istrue === false">버튼</button>
      <p>{{ istrue }}</p>
    </div>
    <div>
      <div style="color: red; font-size: 30px">기존 스타일</div>
      <div :style="style1">정의된 스타일</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      istrue: false,
      style1: {
        color: 'blue',
        fontSize: '45px'
      }
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
.colorclass {
  color: red;
}
.fontclass {
  font-size: 2rem;
}
.bigclass {
  font-size: 2rem;
  font-weight: 700;
  color: blue;
}
</style>
