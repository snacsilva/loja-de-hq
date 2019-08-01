<template>
  <!-- <v-app>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app> -->
  <div id="app" class="md-layout">
    <div class="md-layout-item md-size-33" v-for="quadrinho in quadrinhos" :key="quadrinho.id">
      <quadrinho
        :titulo="quadrinho.title"
        :descricao="quadrinho.description"
        :imagem="getImage(quadrinho)"
    ></quadrinho>
    </div>
  </div>
</template>

<script>
import MarvelApi from '@/services/base';
import Quadrinho from '@/components/Quadrinho';

export default {
  name: 'App',
  components: {
    Quadrinho
  },
  data: () => ({
    quadrinhos: []
  }),
  created() {
    var self = this
    MarvelApi.getAllComics(10, comics => {
      self.quadrinhos = comics.data.data.results;
    })
  }, 
  methods: {
    getImage(quadrinho) {
      if (quadrinho.images.length) {
        return quadrinho.images[0].path + '/portrait_medium.jpg';
      }
    }
  }
};
</script>
