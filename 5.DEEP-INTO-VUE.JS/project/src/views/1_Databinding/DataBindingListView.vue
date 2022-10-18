<template>
  <div>
    <div>
      <select v-model="choose">
        <option
          :value="cityData.code"
          :key="cityData.code"
          v-for="cityData in cityDatas"
        >
          {{ cityData.name }}
        </option>
      </select>
      <p>{{ choose }}</p>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>가격</th>
            <th>수량</th>
            <th>총가격</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="productData.productId" v-for="productData in productDatas">
            <td>{{ productData.productId }}</td>
            <td>{{ productData.productName }}</td>
            <td>{{ productData.productPrice }}</td>
            <td>
              <input
                type="number"
                v-model="productData.productQty"
                min="0"
                step="1"
                max="10"
              />
            </td>
            <td>{{ productData.productPrice * productData.productQty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cityDatas: [
        {
          name: '인천',
          code: '032'
        },
        {
          name: '서울',
          code: '02'
        },
        {
          name: '제주',
          code: '064'
        }
      ],
      choose: '032',
      productDatas: [
        {
          productId: 1,
          productName: 'cola',
          productPrice: 5000,
          productQty: 1
        },
        {
          productId: 2,
          productName: 'rice',
          productPrice: 3200,
          productQty: 1
        },
        {
          productId: 3,
          productName: 'meet',
          productPrice: 9000,
          productQty: 1
        },
        { productId: 4, productName: 'egg', productPrice: 4500, productQty: 1 }
      ]
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
