<template>
  <div>
    <Navbar :title="title"/>
    <Report/>
  </div>
</template>

<script>

import Navbar from "@/components/bie/judge/dashboard/navbar.vue"
import Report from "@/components/bie/village_headman/report/report.vue"
export default {
  name: "election_candidates",
  data(){
    return{
      search: '',
      title:"ລາຍງານຂໍ້ມູນການເລືອກຕັ້ງ",
      dialog: false,
      dialogDelete: false,
      permissionItem:[
        'abc',
        'efg'
      ],
      headersPeople: [
        { text: 'ຮູບ', value: 'image' },
        { text:'ເພດ',value: 'gender'},
        {
          text: 'ຊື່',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'ນາມສະກຸນ', value: 'surname' },
        { text: 'ເບີໂທ', value: 'phoneNumber' },
        { text: 'ວ/ດ/ປ ເກີດ', value: 'dateOfBirth' },
        { text: 'ທີ່ຢູ່', value: 'address' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      peopleItem: {
        name: '',
        surname: '',
        gender: '',
        dateOfBirth: '',
        phoneNumber: '',
        address: '',
        image: '',
      },
      defaultItem: {
        name: '',
        surname: '',
        gender: '',
        dateOfBirth: '',
        phoneNumber: '',
        address: '',
        image: '',
      },
    }
  },
  components:{
    Navbar,
    Report
  },
 
}
</script>
<style lang="scss" scoped>
.container-content{
  width: 100%;
  background-color: #f0f2f5;
  padding: 1rem;
  .make_center{
    width: 100%;
    text-align: center;
  }
}
</style>