<template>
  <div id="dashboard">
    <div class="Navbar">
      <Navbar :title="title"/>
      <div class="container-content">
            <h1 style="text-align: center;">ໜ້າຈັດການຂໍ້ມູນາສຳຫຼັບຄະນະບ້ານ</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/bie/village_headman/dashboard/navbar.vue"

export default {
  name: "dashboard",
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