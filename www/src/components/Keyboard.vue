<template>
  <div class="px-4 pt-8 max-w-4xl mx-auto">
    <KeyboardRow
      v-for="(row, index) in keyboardMap"
      :key="index">
      <component
        v-for="(key, idx) in row"
        :is="key.isStacked ? 'StackedKeys' : 'Key'"
        :key="idx"
        :pressed="pressedKeys"
        :meta="key" />
    </KeyboardRow>
  </div>
</template>

<script>
import KeyboardRow from './KeyboardRow.vue'
import Key from './Key.vue'
import StackedKeys from './StackedKeys.vue'
import keyInfo from '../keyInfo'

export default {
  name: 'Keyboard',
  components: {
    KeyboardRow,
    Key,
    StackedKeys
  },
  data() {
    return {
      keyboardMap: keyInfo,
      pressedKeys: new Set()
    }
  },
  created() {
    window.addEventListener('keydown', this.handleKeypress)
    window.addEventListener('keyup', this.handleKeyup)
    // if document loses focus or visibility state changes, clear the items.
    document.addEventListener('blur', this.clearItems)
    document.addEventListener('visibilitychange', this.clearItems)
  },
  destroyed() {
    window.removeEventListener('keydown', this.handleKeypress)
    window.removeEventListener('keyup', this.handleKeyup)
    document.removeEventListener('blur', this.clearItems)
    document.removeEventListener('visibilitychange', this.clearItems)
  },
  methods: {
    handleKeypress(e) {
      this.pressedKeys.add(e.code)
    },
    handleKeyup(e) {
      this.pressedKeys.delete(e.code)
    },
    clearItems(e) {
      this.pressedKeys.clear()
    }
  }
}
</script>