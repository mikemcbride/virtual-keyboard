<template>
  <div class="px-4 pt-8 max-w-4xl mx-auto">
    <KeyboardRow
      v-for="(row, index) in keyboardMap"
      :key="index">
      <Key
        v-for="(key, idx) in row"
        :key="idx"
        :meta="key">
        {{ key.label }}
      </Key>
    </KeyboardRow>
  </div>
</template>

<script>
import KeyboardRow from './KeyboardRow.vue'
import Key from './Key.vue'
import keyInfo from '../keyInfo'

export default {
  name: 'Keyboard',
  components: {
    KeyboardRow,
    Key
  },
  data() {
    return {
      keyboardMap: keyInfo
    }
  },
  created() {
    window.addEventListener('keydown', this.handleKeypress)
  },
  destroyed() {
    window.removeEventListener('keydown', this.handleKeypress)
  },
  methods: {
    handleKeypress(e) {
      console.log('key pressed:', { keyCode: e.keyCode, location: e.location })
    }
  }
}
</script>