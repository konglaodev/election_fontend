<template>
  <div class="candidate">
    <v-app>
        <Navbar />
        <ShowHistory />
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/homepage/Navbar.vue'
import ShowHistory from '@/components/candidate/showHistory.vue'
export default {
    name: 'showHistory',
    components: {
        Navbar,
        ShowHistory
    }

}
</script>

<style>

</style>