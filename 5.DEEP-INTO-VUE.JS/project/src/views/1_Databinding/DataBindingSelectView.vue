<template>
  <div>
    <div>
      <select v-model="sampleData">
        <option value="064">제주</option>
        <option value="02">서울</option>
        <option value="032">인천</option>
        <option value="031">경기</option>
      </select>
      <p>{{ sampleData }}</p>
    </div>
    <div>
      <label for="html"> html</label>
      <input type="checkbox" id="html" value="html" v-model="favoriteLang" />
      <label for="js"> js</label>
      <input type="checkbox" id="js" value="js" v-model="favoriteLang" />
      <label for="css"> css</label>
      <input type="checkbox" id="css" value="css" v-model="favoriteLang" />
      <p>선택한 언어 {{ favoriteLang }}</p>
    </div>
    <div>
      <label for="html"> html</label>
      <input type="radio" id="html" value="html" v-model="radioData" />
      <label for="js"> js</label>
      <input type="radio" id="js" value="js" v-model="radioData" />
      <label for="css"> css</label>
      <input type="radio" id="css" value="css" v-model="radioData" />
      <p>선택한 언어 {{ radioData }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: '032',
      favoriteLang: [],
      radioData: ''
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
