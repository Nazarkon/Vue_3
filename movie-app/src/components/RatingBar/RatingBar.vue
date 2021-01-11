<template>
  <div class="wrapper_line">
    <h2 class="title_line">{{ title }}</h2>
    <div class="progress_line">
      <div class="progress_line_inner" :style="{width: `${rating}%px`}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingBar',
  props: {
    title: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.progress_line {
  width: 100%;
  height: 10px;
  background-color: #2c3e50;
  border-radius: 10px;
    .progress_line_inner {
      height: 10px;
      background-color: #1DA462;
      border-radius: 10px;
    }
}
</style>
