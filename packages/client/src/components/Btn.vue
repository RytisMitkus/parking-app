<template>
  <button>
    {{ btnName }}
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    btnName: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
</style>
