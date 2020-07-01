<template>
  <div class="flex-1">
    <Key
      :meta="meta.keys[0]"
      :stacked="true"
      rounded="top" />
    <div class="border-t border-gray-300"></div>
    <Key
    :meta="meta.keys[1]"
    :stacked="true"
    rounded="bottom" />
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
  },
  components: {
    Key,
  },
}
</script>