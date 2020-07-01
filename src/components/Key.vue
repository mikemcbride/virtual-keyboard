<template>
  <div
    class="bg-white rounded shadow border-2 pt-4 text-right pr-2 h-12 text-sm"
    :class="isPressed ? 'border-green-400' : 'border-white'"
    :style="computedWidth">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Key',
  props: {
    meta: {
      type: Object,
      required: true
    }
  },
  computed: {
    computedWidth() {
      return `flex-basis: 0; flex-grow: ${this.meta.size}`
    }
  },
  data() {
    return {
      isPressed: false
    }
  },
  created() {
    window.addEventListener('keydown', this.handleKeypress)
    window.addEventListener('keyup', this.handleKeyup)
  },
  destroyed() {
    window.removeEventListener('keydown', this.handleKeypress)
    window.removeEventListener('keyup', this.handleKeyup)
  },
  methods: {
    handleKeypress(e) {
      if (e.keyCode === this.meta.keyCode && e.location === this.meta.location) {
        this.isPressed = true
      }
    },
    handleKeyup(e) {
      if (e.keyCode === this.meta.keyCode && e.location === this.meta.location) {
        this.isPressed = false
      }
    }
  }
}
</script>