<template>
  <div class="px-4 pt-8 max-w-4xl mx-auto">
    <KeyboardRow
      v-for="(row, index) in keyboardMap"
      :key="index">
      <component
        v-for="(key, idx) in row"
        :is="key.isStacked ? 'StackedKeys' : 'Key'"
        :key="idx"
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
      keyboardMap: keyInfo
    }
  }
}
</script>