<script setup>
defineProps({
  size: {
    type: [String, Number],
    default: '48',
  },
})

const theme = useTheme()

const colors = computed(() => {
  return theme.current.value.colors
})
</script>

<template>
  <div style="margin-top: -30%">
    <svg
      :height="size"
      :width="size"
      fill="none"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m41 47 -4 -14L24 30l-13 3 -4 14h34Z" fill="transparent" stroke-width="1" />
      <path
        d="M33 24.5 24 28l-9 -3.5v-12L24 9l9 3.5v12Z"
        fill="transparent"
        stroke-width="1"
      />
      <path d="m41 47 -4 -14L24 30l-13 3 -4 14h34Z" fill="transparent" stroke-width="1" />
      <path
        :fill="colors.svgFillSoft"
        d="M17.25 11.626 24 15h9V12.5L24 9 17.25 11.626Z"
        stroke-width="1"
      />
      <path
        :stroke="colors.svgStroke"
        d="M33.934 32.292 24 47l-9.934 -14.708"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        :stroke="colors.svgStroke"
        d="m41 47 -4 -14L24 30l-13 3 -4 14h34Z"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        :stroke="colors.svgStroke"
        d="M33 24.5 24 28l-9 -3.5v-12L24 9l9 3.5v12Z"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        :stroke="colors.svgStroke"
        d="M21 20v-1"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        :stroke="colors.svgStroke"
        d="M27 20v-1"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        :stroke="colors.svgStroke"
        d="M28.906 31.132 24 39l-4.906 -7.868L24 30l4.906 1.132Z"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        :stroke="colors.svgStroke"
        d="M17.25 11.626 24 15h9v-2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        :stroke="colors.svgStroke"
        d="M17.25 11.626 24 15h9V12.5L24 9 17.25 11.626Z"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        :stroke="colors.svgStroke"
        d="m41 47 -4 -14L24 30l-13 3 -4 14h34Z"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
    </svg>
  </div>
</template>
