<template>
  <div id="comics" class="md-layout">
    <div class="md-layout-item md-size-33" v-for="quadrinho in quadrinhos" :key="quadrinho.id">
        <md-card class="card-default">
            <h2>{{quadrinho.title}}</h2>
            <img class="imagem-quadrinho" :src="getImagem(quadrinho)"/>
            <p>{{quadrinho.description}}</p>
        </md-card>
    </div>
  </div>
</template>

<script>
import Comics from '@/services/base/';

export default {
    name: 'comics',
    data() {
        return {
            quadrinhos: [],
            
        }
    },
     created() {
        var self = this
        Comics.getAllComics(10, comics => {
        self.quadrinhos = comics.data.data.results;
    })
  },
  methods: {
    getImagem: function(quadrinho) {
      if (quadrinho.images.length) {
        return quadrinho.images[0].path + '/portrait_medium.jpg';
      }
    }
  }
}
</script>

<style scoped>
    .imagem-quadrinho {
        width: 120px;
    }
    .card-default {
        padding: 28px;
        margin: 18px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        background: #FFF !important;
    }
</style>
