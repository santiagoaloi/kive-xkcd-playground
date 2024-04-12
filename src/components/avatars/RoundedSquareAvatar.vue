<script setup>
import DuoImage from '@/components/svg/DuoImage.vue'
import DuoPerson from '@/components/svg/DuoPerson.vue'

const props = defineProps({

  initial: {
    type: String,
    default: '',
  },

  textOnly: {
    type: Boolean,
    default: false,
  },

  text: {
    type: String,
    default: '',
  },

  src: {
    type: String,
    default: '',
  },

  size: {
    type: [Number, String],
    default: 45,
  },

  iconSize: {
    type: [Number, String, null],
    default: null,
  },

  link: {
    type: Boolean,
    default: false,
  },

  hover: {
    type: Boolean,
    default: false,
  },

  loading: {
    type: Boolean,
    default: false,
  },

  icon: {
    type: String,
    default: '',
  },

  account: {
    type: Boolean,
    default: false,
  },

  highlight: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['error'])

const imagePlaceholder = computed(() => {
  return props.account ? markRaw(DuoPerson) : markRaw(DuoImage)
})

function subtractPercentage(number, percentage) {
  if (!Number.isNaN(number))
    return number - number * (percentage / 100)

  return null
}

const initialColor = computed(() => {
  const colors = {
    a: 'purple-lighten-3',
    b: 'pink-accent-3',
    c: 'red-lighten-2',
    d: 'deep-purple',
    e: 'indigo-accent-2',
    f: 'blue-darken-4',
    g: 'cyan-lighten-3',
    h: 'teal-lighten-1',
    i: 'green',
    j: 'light-green-lighten-2',
    k: 'lime-darken-2',
    l: 'yellow-lighten-2',
    m: 'amber',
    n: 'orange-darken-4',
    o: 'blue-grey-lighten-3',
    p: 'brown-lighten-2',
    q: 'cyan-accent-4',
    r: 'green-accent-3',
    s: 'lime-accent-3',
    t: 'teal-accent-3',
    u: 'grey',
    v: 'light-blue-lighten-3',
    w: 'indigo-lighten-2',
    x: 'pink-lighten-4',
    y: 'deep-purple-accent-1',
    z: 'black',
  }

  // Convert the initial to lowercase to handle uppercase letters
  const color = colors[props.initial.toLowerCase()]

  // If the initial doesn't have a corresponding color, default to 'gray'
  return color || 'grey'
})
</script>

<template>
  <VAvatar
    :class="[
      { 'opacity-hover': hover && !loading },
      link && 'cursor-pointer active-push-down',
      initial && !src ? `bg-${initialColor}` : highlight ? 'bg-purple-accent-1' : 'bg-square-avatar',
    ]" :size="size" class="mask mask-hexagon prevent-select"
  >
    <div v-if="loading" class="flex h-full items-center justify-center">
      <VProgressCircular color="pink" indeterminate size="25" />
    </div>

    <template v-else>
      <div v-if="src" style="width: 90%; height: 90%">
        <VImg :src="src" cover @error="emit('error')">
          <template #placeholder>
            <div class="flex h-full items-center justify-center">
              <VProgressCircular color="pink" indeterminate size="25" />
            </div>
          </template>
        </VImg>
      </div>

      <div v-if="!src && !textOnly" class="flex">
        <VIcon v-if="icon && !textOnly" :icon="icon" :size="iconSize" />

        <component
          :is="imagePlaceholder" v-if="!icon && !$slots.icon && !initial" :class="{ 'opacity-hover': hover }"
          :size="size - subtractPercentage(size, 50)"
        />

        <div :style="{ 'font-size': `${size * 2.5}%` }">
          {{ capitalize(initial) }}
        </div>

        <slot name="icon" />
      </div>

      <small v-if="textOnly" class="text-link"> {{ text }} </small>
    </template>
  </VAvatar>
</template>

<style scoped>
.opacity-hover {
  transition: opacity 0.1s ease-in-out;
}

.opacity-hover:hover {
  opacity: 0.8;
  /* Adjust the opacity value as needed */
}
</style>
