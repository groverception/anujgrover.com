<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <p>
      I'M A Full Stack DEVELOPER.
    </p>
    <h3>Trying to help mankind one innovation at a time.</h3>

  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  msg: String
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
