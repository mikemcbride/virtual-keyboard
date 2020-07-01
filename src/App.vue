<template>
  <div>
    <h1 class="text-center font-bold text-xl pt-8">Virtual Keyboard</h1>
    <h2 class="text-center font-medium text-base pt-4">Start typing. Have fun!</h2>
    <Keyboard />
  </div>
</template>

<script>
import Keyboard from './components/Keyboard.vue'

export default {
  name: 'App',
  components: {
    Keyboard
  }
}
</script>