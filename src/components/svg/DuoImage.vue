<script setup>
defineProps({
  size: {
    type: String,
    default: '48',
  },
})

const theme = useTheme()

const colors = computed(() => {
  return theme.current.value.colors
})
</script>

<template>
  <svg
    :height="size"
    :width="size"
    fill="none"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M37 3H1v36h36v-36Z" fill="transparent" stroke-width="1" />
    <path
      :fill="colors.svgFillSoft"
      d="m16.6 43 22.8 4 5.6 -32.2 -8 -1.8v26h-20l-0.4 4Z"
      stroke-width="1"
    />
    <path d="M27.4 21 22 30l-5 -2 -2 3h16l-3.6 -10Z" fill="#bbd8ff" stroke-width="1" />
    <path d="M17 12.6v4l-4 2.4 -4 -2.4 8 -4Z" fill="#bbd8ff" stroke-width="1" />
    <path
      :stroke="colors.svgStroke"
      d="M37 3H1v36h36v-36Z"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M1 31h36"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m16.6 43 22.8 4 5.6 -32.2 -4 -0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m26 17 -6 10 -5 -2 -4 6h20l-5 -14Z"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m17 16.6 -4 2.4 -4 -2.4v-4l4 -2.6 4 2.6v4Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m26 17 -6 10 -5 -2 -4 6h20l-5 -14Z"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </svg>
</template>
