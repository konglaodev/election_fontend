<template>
  <div id="dashboard">
    <div class="Navbar">
      <Navbar :title="title"/>
      <div class="container-content">
             <div class="pt-2">
                <v-banner 
  elevation="8"
  rounded
  sticky
>
<center><h3>ໜ້າຈັດການຂໍ້ມູນາສຳຫຼັບຄະນະບ້ານ</h3></center>
</v-banner>
              </div>
              

           <Report/>
      </div>
     
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/bie/village_headman/dashboard/navbar.vue"
import Report from "@/components/bie/village_headman/report/report.vue"

export default {
  name: "dashboard",
  data(){
    return{
      title:"ໜ້າຫຼັກ",
    }
  },
  components:{
    Navbar,
    Report
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