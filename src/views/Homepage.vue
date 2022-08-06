<template>
   <div>
    <Navbar/>
    <v-container >
        <Causel />
        <v-container  style="background-color:gray">
             <Votedetail />
        <allscore />
        </v-container>
   
    </v-container>
    
    <Button_next />
    <Footer/>
   </div>
</template>

<script>
import Button_next from '@/components/homepage/Button_nextpage.vue'
import Navbar from "@/components/homepage/Navbar.vue"
import Causel from '@/components/homepage/Causel.vue'
import Votedetail from '@/components/homepage/VoteDetail.vue'
import Allscore from '@/components/homepage/Allscore.vue'
import Footer from '@/components/homepage/Footer.vue'

export default {
    name: 'Homepage',
    components:{
        Causel,
        Navbar,
        Footer,
        Votedetail,
        Allscore,
        Button_next

    }
}
</script>

<style>

</style>