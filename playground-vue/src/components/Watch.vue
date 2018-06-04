<template>
    <div>
        <h1>Watch</h1>
        <div>
            <button @click="creditAmount+=10">creditMoney</button>
            <button @click="creditAmount-=5;debitAmount=creditAmount;">debitMoney</button>
        </div>
        <div>
            <div>{{creditMoney}}</div>
            <div>{{debitMoney}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            creditAmount : 0,
            debitAmount : 0
        }
    },
    computed:{
        creditMoney(){
            console.log("in creditMoney computed");
            setTimeout(function(){
                console.log("in credit money callback");
            },2000)
            return "amount after credit is "+this.creditAmount;
        },
        debitMoney(){
            console.log("in debitMoney method");
            return "amount after debit is "+this.debitAmount;
        }
    },
    watch:{
        creditAmount(nextAmount,previousAmount){
            console.log("in creditAmount watch nextAmount ",nextAmount," previousAmount ",previousAmount);
            
        },
        debitAmount(){
            console.log("in debitAmount watch");
            
        }
    }
}
</script>
