<template>
  <div>
    <HEADER />
    <BODY />
    <FOOTER />
  </div>
</template>
<script>
import HEADER from "./Header.vue";
import BODY from "./Body.vue";
import FOOTER from "./Footer.vue";
export default {
  components: {
    HEADER,
    BODY,
    FOOTER,
  },
};
</script>
