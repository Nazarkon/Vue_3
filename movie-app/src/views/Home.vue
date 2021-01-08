<template>
      <div class="wrapper">
        <cards  v-for="item in movies[0]"
                :key="item.id"
                :img="item.poster_path"
                :description="item.title"
                :rating="item.vote_average"/>
      </div>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Cards from '@/components/Cards.vue';

export default {
  name: 'Home',
  components: {
    Cards,
  },
  unmounted() {
    console.log('unmounted');
  },
  setup() {
    const store = useStore();
    let movies = ref([]);
    onMounted(() => {
      store.dispatch('GET_POPULAR_MOVIE');
    });
    movies = computed(() => store.getters.getListOfMovie);
    return {
      movies,
    };
  },
};
</script>
<style lang="scss" scoped>
.name{
  color: red
}
.wrapper{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #2c3e50;
}
</style>
