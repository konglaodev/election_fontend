<template>
   <div class="home">
    <Navbar/>
    <v-container >
        <Causel />
        <v-container  >
             <Votedetail />
        <allscore />
        </v-container>
   <!-- <Show_candidate /> -->
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
// import Show_candidate from '@/components/candidate/showCandidateHome.vue'
export default {
    name: 'Homepage',
    components:{
        // Show_candidate,
        Causel,
        Navbar,
        Footer,
        Votedetail,
        Allscore,
        Button_next

    }
}
</script>

<style lang="scss">
.home{
    font-family: $font-family  !important;

}
</style>