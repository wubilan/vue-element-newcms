import Vue from 'vue'
import Vuex from  'vuex'
Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
    author:'wubilan'
  },
  mutations:{
    setAuthor(state,msg){
      state.author=msg;
    }
  }
});
export  default  store;
