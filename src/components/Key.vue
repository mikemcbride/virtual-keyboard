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
    <span class="p-3 inline-block w-full h-full" v-if="meta.icon">
      <component :is="meta.icon" size="100%" />
    </span>
    <span class="px-1" :class="{ 'pb-1': meta.align }" v-else-if="meta.label">{{ meta.label }}</span>
    <span class="px-1 flex flex-col" v-else-if="meta.labels">
      <span class="text-xs">{{ meta.labels[0] }}</span>
      <span class="text-base">{{ meta.labels[1] }}</span>
    </span>
  </div>
</template>

<script>
import IconCommand from './icons/IconCommand.vue'
import IconControl from './icons/IconControl.vue'
import IconOption from './icons/IconOption.vue'

export default {
  name: 'Key',
  props: {
    meta: {
      type: Object,
      required: true
    },
    pressed: {
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
  components: {
    IconCommand,
    IconControl,
    IconOption
  },
  computed: {
    computedWidth() {
      return `flex-basis: 0; flex-grow: ${this.meta.size}`
    },
    isPressed() {
      if (Array.isArray(this.meta.code)) {
        return this.meta.code.some(code => this.pressed.has(code))
      }
      return this.pressed.has(this.meta.code)
    }
  }
}
</script>