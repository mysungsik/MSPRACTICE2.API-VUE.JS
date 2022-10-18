<template>
  <div>
    <div>{{ upnumber }}</div>
    <button @click="upNumber">업!</button>
    <br />
    <select v-model="selectedCityDatas" @change="choose">
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in cityData"
      >
        {{ city.cityName }}
      </option>
    </select>
    <br />
    <select>
      <option
        :key="selectedDongData.cityCode"
        v-for="selectedDongData in selectedDongDatas"
      >
        {{ selectedDongData.dongName }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      upnumber: 0,
      cityData: [
        {
          cityCode: '0',
          cityName: '==도시를 고르세요=='
        },
        {
          cityCode: '200',
          cityName: '서울'
        },
        {
          cityCode: '300',
          cityName: '인천'
        },
        {
          cityCode: '400',
          cityName: '광주'
        },
        {
          cityCode: '500',
          cityName: '부산'
        }
      ],
      dongData: [
        { cityCode: '200', dongCode: '1', dongName: '강남동' },
        { cityCode: '200', dongCode: '2', dongName: '연남동' },
        { cityCode: '200', dongCode: '3', dongName: '한남동' },
        { cityCode: '300', dongCode: '4', dongName: '연수동' },
        { cityCode: '300', dongCode: '5', dongName: '용남동' },
        { cityCode: '300', dongCode: '6', dongName: '용현동' },
        { cityCode: '400', dongCode: '7', dongName: '가리동' },
        { cityCode: '400', dongCode: '8', dongName: '나리동' },
        { cityCode: '500', dongCode: '9', dongName: '개포동' },
        { cityCode: '500', dongCode: '10', dongName: '포포동' },
        { cityCode: '500', dongCode: '11', dongName: '라포동' }
      ],
      selectedCityDatas: '0',
      selectedDongDatas: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    upNumber(event) {
      console.log(event.target)
      this.upnumber = this.upnumber + 1
    },
    choose() {
      this.selectedDongDatas = this.dongData.filter(
        (dong) => dong.cityCode === this.selectedCityDatas
      )
    }
  }
}
</script>

<style></style>
