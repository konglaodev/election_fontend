<template>
  <div >
<hr style="margin-top:50PX;" ><b></b>
    <center><h1 style="margin-top:50PX;" >ສະຫຼຸບລາຍລະອຽດ</h1></center><br>
    <v-simple-table >
      <template v-slot:default>
    
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td style="font-style:bold; font-size:36px">{{ item.name }}</td>
            <td style="font-size:36px">{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  
  mounted(){
    axios.get("http://127.0.0.1:8000/api/sumvote_score_all").then((response)=>{
      this.desserts[0].calories =  response.data.data[0].scorevoted;
    }).catch((err)=>{
      console.log(err);
    });
    axios.get("http://127.0.0.1:8000/api/canvoted").then((response)=>{
 this.desserts[1].calories =  response.data.data[0].canvoted
    }).catch((err)=>{
      console.log(err);
    });
  },
  data() {
    return {
      desserts: [
      
        {
          name: "ຄະແນນສຽງເລືອກແລ້ວ",
          calories: "loading...",
        },
        {
          name: "ຄະແນນສຽງທັງໝົດ",
          calories: "loading...",
        },
      ],
    };
  },
};
</script>
<style scoped>



</style>