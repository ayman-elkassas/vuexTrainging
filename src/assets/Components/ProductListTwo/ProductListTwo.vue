<template src="./productlisttwo.html"></template>
<style src="./productlisttwo.css"></style>

<script>
	export default {
    name : "ProductListOne",
    data:function () {
      return{

      }
    },
    //Todo: The old way
    // props:['products']
    //Todo:The New Way using vuex
    computed:{
      products(){
        return this.$store.state.products
      },
      saleProducts:function () {
        //Todo:Old way
        // var saleProducts=this.$store.state.products.map(product=>{
        //   return{
        //     name:'**'+product.name+'**',
        //     price:product.price/2
        //   }
        // });
        //
        // return saleProducts;
        //Todo:New way using getters
        return this.$store.getters.saleProducts;
      }
    }
	}
</script>
