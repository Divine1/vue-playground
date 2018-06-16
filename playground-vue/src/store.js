import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        counter :1 ,
        country: "india"
    },
    getters:{
        counterGetter(state){
            return state.counter;
        },
        countryGetter(state){
            return state.country;
        }
    },
    mutations:{
        counterMutation(state,data){
            console.log("in counterMutation ", data);
            state.counter = data;
        }
    },
    actions:{
        counterActions(context,data){
            console.log("in counterActions ", data);
            context.commit("counterMutation",data);
            return "hey";
        }
    }


});

