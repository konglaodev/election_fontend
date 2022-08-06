<template>
  <div id="dashboard_superadmin">
    <div class="Navbar">
      <Navbar :title="title"/>
      <div class="container-content">

      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/bie/judge/dashboard/navbar.vue"

export default {
  name: "dashboard_superadmin",
  data(){
    return{
      title:"ໜ້າຫຼັກ",
    }
  },
  components:{
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.container-content{
  width: 100%;
  background-color: #f0f2f5;
  padding: 1rem;
}
</style>