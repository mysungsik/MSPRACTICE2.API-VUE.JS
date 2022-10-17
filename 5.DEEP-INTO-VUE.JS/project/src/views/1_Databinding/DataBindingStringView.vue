<template>
  <div>
    <h1>{{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '명식',
      message: '어서와요'
    }
  }
}
</script>

<style scoped></style>
