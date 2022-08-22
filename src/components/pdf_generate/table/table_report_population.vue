<template>
   <div>

     <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="800px"
 
        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
    >
        <section slot="pdf-content">
              <!-- <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table> -->
      <v-data-table 
     
    :headers="header"
    :items="notevote"
    :items-per-page="10"
    class="elevation-1 "
  >
    <!-- <template v-slot:[`item.index`]="{ item }">
    <p>{{notevote.indexOf(item)+1 }}</p>
  </template>
  <template v-slot:[`item.candidate_images`]="{ item }">
     <v-img
              max-height="250"
              max-width="150"
              :src="'http://127.0.0.1:8000/storage/candidate_images/'+item.candidate_image"
          ></v-img>
  </template> -->
  <template v-slot:[`item.name`]="{ item }">
    <p>{{item.gender }} {{item.name}} {{item.surname}}</p>
  </template>
  </v-data-table>
        </section>
    </vue-html2pdf>
   </div>
</template>
<script>
import VueHtml2pdf from 'vue-html2pdf'
 import axios from 'axios'
export default {
    data () {
      return {
        notevote: [],
        
         header:[
        //   {
        //   text:'ລຳດັບທີ',
        //   align:'start',
        //   sortable: true,
        //   value: 'index'
        // },
        {
          text:'ຊື່ ແລະ ນາມສະກຸນ',
          align:'start',
          sortable: true,
          value:'name'
        },
        {
          text:'ເບີໂທ',
          align:'start',
          sortable: true,
          value:'phoneNumber'
        },
        {
          text:'ສຳມະໂນຄົວເລກທີ',
          align:'start',
          sortable: true,
          value:'cencus_id'
        },

        // {
        //   text:'ຄະແນນເລືອກຕັ້ງ',
        //   sortable: true,
        //   value:'votes_count'
        // }
      ],
      }
    },
    created(){
        
    },
    mounted(){
      axios.get("http://127.0.0.1:8000/api/peopleNotvote").then((response)=>{
  // console.log('res',response);
       this.notevote = response.data.data;
    
      console.log('thislog',this.notevote);
    }).catch((err)=>{
      console.log(err);
    });
         this.generateReport()
    },
    methods: {
        /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
        generateReport () {
            this.$refs.html2Pdf.generatePdf()
        },
          async print () {
      // Pass the element id here
      await this.$htmlToPaper('printMe');
    }
        
    },
 
    components: {
        VueHtml2pdf
    }
}
</script>