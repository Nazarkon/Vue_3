/* eslint-disable import/no-dynamic-require */
<template>
  <nav class="container">
        <header class="nav_header">
            <img src="../../assets/icons/tvIcon.png"/>
            <p class="nav_title">Movie App</p>
        </header>
        <main>
            <ul class="nav_list">
                <li class="nav_item" v-for="(item,index) in links" :key="index">
                    <img class="nav_img" :src="'/icon/' + item.icon + '.png'"/>
                        <router-link class="nav_link" :to="item.link">
                            <p class="nav_link_text">{{item.value}}</p>
                    </router-link>
                </li>
            </ul>
        </main>
    </nav>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      links: [
        {
          value: 'Most Popular',
          link: '/',
          icon: 'homeIcon',
        },
        {
          value: 'About',
          link: '/about',
          icon: 'AboutIcon',
        },
      ],
      isOpen: false,
    };
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.container{
    max-height: 100%;
    background: #D9664D ;

        .nav_header{
            padding: 30px;
            display: flex;
            align-items: center;
        }
            .nav_title{
                color:black;
                font-size: 20px;
                margin-left: 20px;
            }
        .nav_list{
            list-style-type: none;
            width: 250px;
        }
            .nav_item{
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
                .nav_img{
                    width: 30px;
                }
                .nav_link{
                    text-decoration: none;
                }
                .nav_link_text{
                    font-size: 20px;
                    margin-left: 30px;
                     &:hover{
                            color: #42b983;
                    }

                }

}
</style>
