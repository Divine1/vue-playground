<template>
    <div>
        <h1>Home</h1>
        <div>
            <div>normal</div>
            <!-- <div>counter:  {{counterComputed}}</div>  -->
           <!-- <div>country: {{countryGetter}}</div> -->
            <button @click="increment">increase</button>

        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
     /*computed :{
       
        counter(){
            //return this.$store.state.counter;
            return this.$store.getters.counterGetter;
        }
       
    }, */
    /*computed : mapGetters(["counterGetter","countryGetter"]),*/
    computed:{
        counterComputed : {
            get(){
                console.log("in counterComputed get");
                return this.$store.getters.counterGetter;
            }
            
        }
    },
    methods:{
        increment(){
            var temp = this.$store.state.counter++;
            var ret = this.$store.dispatch("counterActions",temp+1);
            ret.then(data =>{
                console.log("data", data);
            }).catch(err=>{
                console.log("err ",err)
            })
        }
    }
}
</script>
