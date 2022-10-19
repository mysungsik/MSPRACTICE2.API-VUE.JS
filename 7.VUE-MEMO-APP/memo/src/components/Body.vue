<template>
  <main>
    <p>MEMO</p>
    <button class="btn btn-primary" @click="addItems">추가</button>
    <ul>
      <li :key="memo.memoID" v-for="memo of memoDatas">{{ memo.memoBody }}</li>
    </ul>
    <button class="btn btn-primary" @click="bringMemos">서버에서추가</button>
    <input type="text" v-model="inputText" />
    <p>{{ inputText }}</p>
    <button
      :class="{ btn: true, 'btn-primary': true, notblock: true }"
      @click="pushMemos"
    >
      서버에 추가
    </button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      memoDatas: [],
      inputText: "",
      autoId: "5",
    };
  },
  methods: {
    addItems() {
      this.memoDatas.push({
        memoID: "추가된",
        memoBody: "추가된",
      });
    },
    async bringMemos() {
      const response = await fetch("http://localhost:3000/api/memos");
      const responseData = await response.json();
      this.memoDatas.push(responseData.memos);
    },
    async pushMemos() {
      const response = await fetch("http://localhost:3000/api/memos", {
        method: "POST",
        body: JSON.stringify({
          inputMemoId: this.autoId,
          inputMemo: this.inputText,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      const responseData = await response.json();
      this.memoDatas = responseData.allData;

      this.inputText = "";
    },
  },
  async created() {
    const response = await fetch("http://localhost:3000/api/allmemos");
    const responseData = await response.json();
    this.memoDatas.push(...responseData);
  },
};
</script>

<style scoped>
main p {
  text-align: center;
  margin: 1rem;
  font-size: 1.5rem;
}
ul {
  list-style: none;
  text-align: center;
  padding: 0;
}
button {
  width: 100%;
  margin: 1rem;
}
.notblock {
  width: fit-content;
}
</style>
