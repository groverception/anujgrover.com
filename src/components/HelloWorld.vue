<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <p>
      I'M A Full Stack DEVELOPER.
    </p>
    <h3>Trying to help makind one innovation at a time.</h3>

    <h4> Visitors {{ visitor_count }} </h4>
  </div>
</template>

<script setup>
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   },
//   data:{
//     visitor_count: 0
//   }
// }
import { ref, onMounted,defineProps } from 'vue'
import { supabase } from '../lib/supabase'
// Initialize the JS client

// Create a function to handle inserts
const handleInserts = (payload) => {
  console.log('Change received!', payload)

}

// Listen to inserts
supabase
  .channel('visitor_count')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'visitor_count' }, handleInserts)
  .subscribe()

  
const visitor_count = ref('')
const props = defineProps({
  msg: String
})
// async function getCounter() {
//   const { data } = await supabase.from('visitor_count').select()
//   visitor_count.value = data
// }

async function increaseCounter() {
  await supabase.from('visitor_count').insert(visitor_count.value+1)
}

onMounted(() => {
  increaseCounter()
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
