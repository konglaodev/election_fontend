<template>
  <div id="dashboard_superadmin">
    <div class="Navbar">
      <Navbar :title="title"/>
      <div class="container-content">
              <div class="pt-15">
                <v-banner  class="py-2" 
  elevation="8"
  rounded
  sticky
>
<center><h3>ລະບົບຈັດການຂໍ້ມູນສຳຫຼັບຄະນະກຳມະການ</h3></center>
</v-banner>
              </div>
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