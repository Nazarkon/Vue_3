<template>
  <teleport to="#modal-wrapper">
    <modal v-if="modalOpen">
      <p>Hello, I'm a modal window.</p>
    </modal>
  </teleport>
  <div class="wrapper">
        <header class="wrapper_header" v-if="movie" >
            <div class="wrapper_title">
                <div class="wrapper_title__img">
                  <img class="img" :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path" alt="logo">
                </div>
                <div class="wrapper_title__description">
                  <h1 class="wrapper_title_name">{{movie.title}}</h1>
                  <div class="wrapper_score block">
                    <h3>Score</h3>
                    <p>{{movie.vote_average}}</p>
                  </div>
                  <div class="wrapper_budget block">
                    <h3>Budget</h3>
                    <p>{{movie.budget}} $</p>
                  </div>
                  <div class="wrapper_language block">
                    <h3>Original Language</h3>
                    <p>{{movie.original_language}}</p>
                  </div>
                  <div class="wrapper_language block">
                    <h3>Revenue</h3>
                    <p>{{movie.revenue}}</p>
                  </div>
                  <div class="wrapper_overview block">
                    <h3>Overview</h3>
                    <p>{{movie.overview}}</p>
                  </div>
                </div>
              <Button
                :title="'Open Window'"
                @open="toggleModalState"
              />
            </div>
        </header>
  </div>
</template>

<script>
import {
  computed, ref, onMounted,
} from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import Modal from '@/components/Modal/Modal.vue';
import Button from '@/components/Button/Button.vue';

export default {
  name: 'Details',
  watch: {
    movie(val) {
      console.log(val, 'val');
    },
  },
  components: {
    Modal,
    Button,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    let id = ref(0);
    let movie = ref([]);
    const modalOpen = ref(false);
    const toggleModalState = () => {
      modalOpen.value = !modalOpen.value;
    };

    id = computed(() => route.params.id);

    movie = computed(() => store.getters.getMovieById);

    onMounted(() => {
      store.dispatch('GET_MOVIE_BY_ID', route.params.id);
    });

    return {
      id,
      movie,
      modalOpen,
      toggleModalState,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper{
  width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: #2c3e50;
  .wrapper_header{
    width: 100%;
    .wrapper_title{
      display: flex;
      .wrapper_title__img{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
      }
      .wrapper_title__description{
        text-align: left;
        flex: 2;
        color:white;
      }
      .wrapper_description_rating{
        width: 100%;
        max-width: 300px;
      }
      .block{
        width: 90%;
        border-bottom: 2px solid gray
      }
    }

  }
}
</style>
