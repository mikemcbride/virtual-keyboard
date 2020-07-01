<template>
  <div
    class="shadow border-2 flex flex-col mx-1"
    :class="{
      'h-12': !stacked,
      'h-6': stacked,
      'rounded': rounded === 'all',
      'rounded-t': rounded === 'top',
      'rounded-b': rounded === 'bottom',
      'border-green-400 bg-green-100 text-green-600': isPressed,
      'bg-white border-white': !isPressed,
      'text-xs': meta.font === 'small',
      'text-left justify-end': meta.align === 'left',
      'text-right justify-end': meta.align === 'right',
      'text-center justify-center': !meta.align
     }"
    :style="computedWidth">
    <span class="px-1" :class="{ 'pb-1': meta.align }">{{ meta.label }}</span>
  </div>
</template>

<script>
export default {
  name: 'Key',
  props: {
    meta: {
      type: Object,
      required: true
    },
    stacked: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: String,
      default: 'all'
    }
  },
  computed: {
    computedWidth() {
      return `flex-basis: 0; flex-grow: ${this.meta.size}`
    },
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
      if (e.code === this.meta.code) {
        this.isPressed = true
      }
    },
    handleKeyup(e) {
      if (e.code === this.meta.code) {
        this.isPressed = false
      }
    }
  }
}
</script>