<template>
  <div class="container" @click="routeToDetails">
    <div class="container_img">
      <img class="img" :src="'https://www.themoviedb.org/t/p/w300_and_h450_face' + img" alt="logo">
    </div>
    <div class="container_description">
      <div class="container_title">{{description}}</div>
      <div class="container_rating">{{rating}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Сards',
  props: {
    id: {
      type: Number,
      default: null,
    },
    img: {
      type: String,
      default: '#',
    },
    name: {
      type: String,
      default: '#',
    },
    description: {
      type: String,
      default: '',
    },
    rating: {
      type: [String, Number],
      default: '7.3',
    },
  },
  methods: {
    routeToDetails() {
      console.log(this.id);
      const kebabCase = this.name.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();

      this.$router.push(`/details/${kebabCase}/${this.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    max-width: 300px;
    background-color: #D9664D;
    margin: 10px;
      .img{
        width: 100%;
        height: auto;
        display: block;
      }
      .container_description{
        display: flex;
        font-size: 20px;
        font-weight: 600;
        margin: 10px 0 10px 0;
          .container_title{
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container_rating{
            max-width: 100px;
            padding: 10px 10px 10px 10px;
            color:white;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #2c3e50;
          }
      }
  }
</style>
