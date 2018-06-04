<template>
    <div>
        <h1>Dynamic Route</h1>
        <div>
            <div>
                Current route is : {{ $route.params.id }}
            </div>
            <div>
                <input type="text" v-model="country">
                <button @click="changeCountry">Update Route</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            country : ""
        }
    },
    watch: {
        '$route' (to, from) {
            console.log("in $route to ",to," from ",from);
        }
    },
    methods:{
        changeCountry(){
            console.log("in changeCountry method");
            this.$router.push("/dynamic/"+this.country);
        }
    }
    
}
</script>
<!-- https://router.vuejs.org/guide -->