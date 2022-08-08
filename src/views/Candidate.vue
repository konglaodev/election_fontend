<template>
  <div class="candidate">
    <v-app>
        <Navbar />
        <Showcandidate />
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/homepage/Navbar.vue'
import Showcandidate from '@/components/candidate/showCandidate.vue'
export default {
    name: 'candiadate',
    components: {
        Navbar,
        Showcandidate
    }

}
</script>

<style>

</style>