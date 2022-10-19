<template>
  <div>
    <p>{{ id }}</p>
    <p>{{ password }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      password: "",
    };
  },
  async created() {
    const accountsData = await fetch("http://localhost:3000/api/account");
    const account = await accountsData.json();
    this.id = account.account.id;
    this.password = account.account.password;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
