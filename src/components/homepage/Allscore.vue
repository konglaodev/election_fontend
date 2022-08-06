<template>
  <div >
<hr style="margin-top:50PX;" ><b></b>
    <center><h1 style="margin-top:50PX;" >ສະຫຼຸບລາຍລະອຽດ</h1></center><br>
    <v-simple-table >
      <template v-slot:default>
    
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td style="font-style:bold; font-size:16px">{{ item.name }}</td>
            <td style="font-size:16px">{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      desserts: [
      
        {
          name: "ຄະແນນສຽງເລືອກແລ້ວທັງໝົດ",
          calories: 452,
        },
        {
          name: "ຄະແນນສຽງທັງໝົດ",
          calories: 518,
        },
      ],
    };
  },
};
</script>
<style scoped>



</style>