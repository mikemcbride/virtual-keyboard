<template>
  <div class="w-16">
    <Key
      :meta="meta.keys[0]"
      :stacked="true"
      rounded="top"
      :pressed="pressed" />
    <div class="border-t border-gray-300"></div>
    <Key
      :meta="meta.keys[1]"
      :stacked="true"
      rounded="bottom"
      :pressed="pressed" />
  </div>
</template>

<script>
import Key from './Key.vue'
export default {
  name: 'StackedKeys',
  props: {
    meta: {
      type: Object,
      required: true
    },
    pressed: {
      required: true
    }
  },
  components: {
    Key,
  },
}
</script>