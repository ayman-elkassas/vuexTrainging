import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store =new Vuex.Store({
  //TODO:For shared data
  state:{
    products:[
      {name:'Banana Skin',price:20},
      {name:'Banana Skin',price:20},
      {name:'Banana Skin',price:20},
      {name:'Banana Skin',price:20},
      {name:'Banana Skin',price:20},
    ]
  },
  //TODO:For shared computed function
  getters:{
    saleProducts:state => {
      var saleProducts=state.products.map(product=>{
        return{
          name:'**'+product.name+'**',
          price:product.price/2
        }
      });
      return saleProducts;
    }
  },
  //TODO:For shared methods function
  strict:true,
  mutations:{
    reducePrice:(state,payload) => {
      state.products.forEach(product=>{
        product.price-=payload;
      })
    }
  },
  actions:{
    reducePrice:(context,payload)=>{
      setTimeout(function () {
        context.commit('reducePrice',payload)
      },3000);
    }
  }
});
