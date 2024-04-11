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
    <path
      d="M35 30.126V7l-9 -4H10l-9 4v30l9 4h15v1.5l8 4.5 8 -4.5v-9l-6 -3.374Z"
      fill="transparent"
      stroke-width="1"
    />
    <path :fill="colors.svgFillSoft" d="M41 33.5v9l-8 4.5 -8 -4.5 16 -9Z" stroke-width="1" />
    <path
      :fill="colors.svgFillSoft"
      d="m25 33.5 8 -4.5 2 1.126V7l-9 4H18v30h7v-7.5Z"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M35 25v-18l-9 4H10l-9 -4v30"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m35 17 -9 4H10l-9 -4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M22 31H10l-9 -4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M19 41H10l-9 -4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m1 7 9 -4h16l9 4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m47 46.358 -6 -3.854"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m25 33.5 8 -4.5 8 4.5v9l-8 4.5 -8 -4.5v-9Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
