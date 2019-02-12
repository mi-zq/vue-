<template>
    <div>
        <mt-swipe :auto="4000">
        <mt-swipe-item>
            
        </mt-swipe-item>
        
</mt-swipe>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                bannerList:[]
            }
        },
        created(){
            this.getBanner()
        },
        methods:{
            getBanner(){
                this.$http.get('http://vue.studyit.io//api/getnewslist').then(res =>{
                    console.log(res);
                    
                })
            }
        }
    }
</script>

<style>
    .mint-swipe{
        height: 200px
    }
</style>
