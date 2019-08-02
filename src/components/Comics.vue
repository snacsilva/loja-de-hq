<template>
 <div id="comics" class="md-layout">
  <div
   class="md-layout-item md-size-33"
   v-for="quadrinho in comics"
   :key="quadrinho.id"
  >
   <md-card class="card-default">
    <a :href="getComic(quadrinho.id)">
     <h2>{{ quadrinho.title }}</h2></a
    >
    <img class="imagem-quadrinho" :src="getImagem(quadrinho)" />
    <p>{{ quadrinho.description }}</p>
   </md-card>
  </div>
 </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import * as comicTypes from '@/vuex/comics/types';

export default {
 name: 'comics',
 computed: {
  ...mapGetters({
   comics: comicTypes.COMICS
  })
 },
 created() {
  this[comicTypes.GETALLCOMICS]();
 },
 methods: {
  ...mapActions([
    comicTypes.GETALLCOMICS,
    comicTypes.GETCOMIC
  ]),
  getImagem(quadrinho) {
   if (quadrinho.images.length) {
    return quadrinho.images[0].path + '/portrait_medium.jpg';
   }
  },
  getComic(comicId) {
   this[comicTypes.GETCOMIC](comicId);
  }
 }
};
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
 background: #fff !important;
}
</style>
