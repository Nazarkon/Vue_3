<template>
  <button @click="$emit('open')">{{title}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>

</style>
