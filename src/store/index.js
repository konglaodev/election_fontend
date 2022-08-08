import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false ,
    phoneregister:"",
  },
  // getters: {
  //      isLogin(state){
  //       return state.isLoggedIn;
  //      },
  //      username(state){
  //       return state.username;
  //      }
  // },
  mutations: {
    // SET_LOGGED_IN(state){
    //   state.isLoggedIn = true;
    // },
    // SET_LOGGED_OUT(state){
    //   state.isLoggedIn = false;
    // },
    // SET_USERNAME(state,value ){
    //   state.username = value;
    // }

  },
  actions: {
    // doLogin({commit,dispatch},{username,password}){
    //   let result =true; // await api.login(username,password);
    //   if(result==true){
    //     commit("SET_LOGGED_IN");
    //     commit("SET_USERNAME",username);

    //   }else{
    //     dispatch("dologout",{}  );
    //   }
    // },
    // dologout({commit}){
    //     //api.logoff();
    //     commit("SET_LOGGED_OUT");
    //     commit("SET_USERNAME  ");
    // },
    // restoreLogin({ commit   }){
       
    // }
    
        
  },
  modules: {
      auth
  }
})
