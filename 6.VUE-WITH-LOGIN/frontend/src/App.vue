<template>
  <div>
    <div v-if="state.isLogedIn">
      <p>환영합니다 {{ state.account.userid }}</p>
      <p>당신의 이름은 {{ state.account.userName }}</p>
    </div>
    <div v-else>
      <label> 아이디 </label>
      <input type="text" v-model="state.form.loginId" />
      <label>비밀번호</label>
      <input type="password" v-model="state.form.loginPassword" />
      <button @click="login">로그인</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: {
        isLogedIn: "",
        account: {
          userid: "",
          userName: "",
        },
        form: {
          loginId: "",
          loginPassword: "",
        },
      },
    };
  },
  methods: {
    async login() {
      const response = await fetch("http://localhost:3000/api/account", {
        method: "POST",
        body: JSON.stringify({
          enteredUserID: this.state.form.loginId,
          enteredUserPassword: this.state.form.loginPassword,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const responseData = await response.json();
      if (responseData.userInput) {
        this.state.isLogedIn = true;
        this.state.account.userid = responseData.userInput.loginId;
        this.state.account.userName = responseData.userInput.name;
      } else {
        console.log(responseData.message);
      }
    },
  },
  async created() {
    const response = await fetch("http://localhost:3000/api/account");
    const responseData = await response.json();
    const userData = responseData.account;
    this.state.account.userid = userData.userid;
    this.state.account.userName = userData.userName;
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
