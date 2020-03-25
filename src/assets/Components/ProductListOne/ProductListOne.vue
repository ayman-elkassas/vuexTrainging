<template src="./productlistone.html"></template>
<style src="./productlistone.css"></style>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'

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
      //TODO:Can you hash this method declare after using ...mapGetters
      // saleProducts:function () {
      //   //Todo:Old way
      //   // var saleProducts=this.$store.state.products.map(product=>{
      //   //   return{
      //   //     name:'**'+product.name+'**',
      //   //     price:product.price/2
      //   //   }
      //   // });
      //   //
      //   // return saleProducts;
      //   //Todo:New way using getters
      //   return this.$store.getters.saleProducts;
      // },
      //TODO:Mapping actions & getters
      //TODO:To enable (...) install > npm install babel-preset-stage-2 --save-dev
      ...mapGetters([
        'saleProducts'
      ])
    },
    methods:{
      //TODO:Can you hash this method declare after using ...mapActions
      // reducePrice:function (amount) {
      //   // Todo:The old way
      //   // this.$store.state.products.forEach(product=>{
      //   //   product.price-=1;
      //   // });
      //   //Todo:New way using mutations
      //   // this.$store.commit('reducePrice');
      //   //TODO:Time reduce
      //   this.$store.dispatch('reducePrice',amount)
      // },
      ...mapActions([
        'reducePrice'
      ])
    }
	}
</script>
