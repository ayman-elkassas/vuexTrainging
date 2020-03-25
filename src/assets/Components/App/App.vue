<template src="./app.html"></template>
<style src="./app.css"></style>


<script>
  import ProductListOne from "../ProductListOne/ProductListOne.vue";
  import ProductListTwo from "../ProductListTwo/ProductListTwo.vue";
export default {
  name: 'app',
  data () {
    return {
      // products:[
      //   {name:'Banana Skin',price:20},
      //   {name:'Banana Skin',price:20},
      //   {name:'Banana Skin',price:20},
      //   {name:'Banana Skin',price:20},
      //   {name:'Banana Skin',price:20},
      // ]
    }
  },
  components:{
    'product-list-one':ProductListOne,
    'product-list-two':ProductListTwo,
  }
}
</script>


