<template>
  <div>
    <Navbar :title="title"/>
    <div class="container-content">
    <center class="py-10">           <h1>ລາຍຊື່ປະຊາກອນທັງໝົດ</h1>
</center>
      <v-data-table
          :search="search"
          :headers="headers"
          :items="peopleData['data']"
          sort-by="calories"
          class="elevation-1"
      >

        <template v-slot:top>
          <v-toolbar
              flat
          >
            <v-spacer></v-spacer>
            <v-dialog
                v-model="dialog"
                max-width="500px"
            >
              <template v-slot:activator="{ on, attrs }">

                <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                >
                  ເພີ່ມ
                </v-btn>
                <v-text-field
                    class="pr-10"
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
              </template>
              <v-card>
                <v-card-title>
                  {{ formTitle }}
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row dense>
                      <v-col
                          cols="12"
                      >
                        <div class="check_modal_edit" v-show="isEdit ===false">
                          <div class="upload-image mb-5" v-show="previewImage == null">
                          <div class="content" >
                            <i class="fas fa-plus-circle"></i>
                            <h3>ຮູບ</h3>
                          </div>
                          <input
                               ref="myFiles"
                              type="file"
                              class="choose-file"
                              name="upload-image"
                              accept="image/*"
                              @change="UploadImage"
                          />
                        </div>
                        <div class="image" v-show="previewImage !== null">
                          <div class="increase-decrease-image" >

                            <v-btn
                                class="mx-2"
                                color="error"
                                dark
                                fab
                                small
                                @click="removeImage"
                            >
                              <v-icon dark>
                                mdi-close
                              </v-icon>
                            </v-btn>

                            <input
                                ref="uploader"
                                accept="image/*"
                                class="d-none"
                                type="file"
                                @change="UploadImage"
                            />
                          </div>
                          <v-img class="image-files" :src="previewImage"   max-width="100%" max-height="250"  contain/>



                        </div>
                          </div>

<div class="check_modal_edit" v-show="isEdit ===true && peopleItem.image === ''">
                          <div class="upload-image mb-5" v-show="previewImage == null">
                          <div class="content" >
                            <i class="fas fa-plus-circle"></i>
                            <h3>ຮູບ</h3>
                          </div>
                          <input
                               ref="myFiles"
                              type="file"
                              class="choose-file"
                              name="upload-image"
                              accept="image/*"
                              @change="UploadImage"
                          />
                        </div>
                        
                          </div>


                          <div class="check_modal_edit" v-show ="isEdit == true && previewImage ==null && peopleItem.image !== ''" @click="uploadImageByClickOnPreview">
                            <v-img class="image-files" :src="imageUrlPreview"   max-width="100%" max-height="250"  contain/>
                          </div>

                    <div class="image" v-show="previewImage !== null && isEdit == true">
                          <div class="increase-decrease-image" >

                            <v-btn
                                class="mx-2"
                                color="error"
                                dark
                                fab
                                small
                                @click="removeImage"
                            >
                              <v-icon dark>
                                mdi-close
                              </v-icon>
                            </v-btn>

                            <input
                                ref="uploader"
                                accept="image/*"
                                class="d-none"
                                type="file"
                                @change="UploadImage"
                            />
                          </div>
                          <v-img class="image-files" :src="previewImage"   max-width="100%" max-height="250"  contain/>



                        </div>
                      </v-col>
                      <v-col
                          cols="12"
                      >

                        <v-select
                            :items="genderItem"
                            item-text="number"
                            item-value="number"
                            label="ເພດ"
                            outlined
                            v-model="peopleItem.gender"
                        ></v-select>
                      </v-col>

                      <v-col
                          cols="12"
                      >
                        <v-text-field
                            outlined
                            v-model="peopleItem.name"
                            label="ຊື່"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                      >
                        <v-text-field
                            outlined
                            v-model="peopleItem.surname"
                            label="ນາມສະກຸນ"
                        ></v-text-field>
                      </v-col>

                      <v-col
                          cols="12"
                      >
                        <v-text-field
                     
                        placeholder="98765432"
                            outlined
                            v-model="peopleItem.phoneNumber"
                            label="ເບີໂທ"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"

                      >
                        <v-menu
                            ref="menu1"
                            v-model="menu1"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                outlined
                                v-model="peopleItem.dateOfBirth"
                                label="ວັນ ເດືອນ ປີເກີດ"

                                persistent-hint
                                prepend-icon="mdi-calendar"
                                v-bind="attrs"

                                v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                              v-model="peopleItem.dateOfBirth"
                              no-title
                              @input="menu1=false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col
                          cols="12"

                      >
                        <v-text-field
                            outlined
                            v-model="peopleItem.address"
                            label="ທີ່ຢູ່"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"

                      >
                        <v-select
                        
                            :items="censusData['data']"
                            item-text="cencus_id"
                            item-value="id"
                            label="ເລກສຳມະໂນ"
                            outlined
                            v-model="peopleItem.cencus_id"
                            
                        ></v-select>

                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                  >
                    ຍົກເລີກ
                  </v-btn>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                  >
                    ບັນທຶກ
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px" >
              <v-card
              >

                <v-card-title class="justify-center" >ຕ້ອງການລຶບປະຊາກອນຄົນນີ້ແທ້ຫຼືບໍ່?</v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="grey" dark @click="closeDelete">ຍົກເລີກ</v-btn>
                  <v-btn color="red darken-1" dark @click="deleteItemConfirm">ຕົກລົງ</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog
                v-model="dialogView"
                max-width="800"
                max-height="1000"
            >
              <v-card >
                <v-card-title>
                  {{ formTitle }}
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row dense>
                      <v-col
                          cols="6"
                      >
                        <v-img

                            max-height="600"
                            max-width="400"
                            :src="'http://127.0.0.1:8000/storage/populations_images/'+peopleItem.image"
                        ></v-img>

                      </v-col>

                      <v-col cols="6">
                        <v-row >

                          <v-col
                              cols="12"
                          >
                            <h3>
                              ຊື່ແລະນາມສະກຸນ: {{peopleItem.gender}} {{peopleItem.name}} {{peopleItem.surname}}
                            </h3>
                          </v-col>
                          <v-col
                              cols="12"
                          >
                            <h3>ວັນເດືອນປີເກີດ: {{peopleItem.dateOfBirth}}</h3>
                          </v-col>

                          <v-col
                              cols="12"
                          >
                            <h3>ເບີໂທ: {{peopleItem.phoneNumber}}</h3>
                          </v-col>

                          <v-col
                              cols="12"
                          >
                            <h3>ທີ່ຢູ່: {{peopleItem.address}}</h3>
                          </v-col>

                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="closeView"
                  >
                    ປິດ
                  </v-btn>

                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.image`]="{item}">
          <v-img
              max-height="80"
              max-width="60"
              :src="'http://127.0.0.1:8000/storage/populations_images/'+item.image"
          ></v-img>
        </template>
        <template v-slot:[`item.actions`]="{ item }">

          <v-icon
              color="orange"
              dense
              class="mr-2"
              @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              class="mr-2"
              color="red"
              dense
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
          <v-icon
              color="blue"
              large
              class="mr-2"
              @click="viewItem(item)"
          >
            mdi-eye
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
              color="primary"
              @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </div>
    <Alert/>
  </div>
</template>

<script>
import Alert from "@/components/bie/alert/alert.vue"
import Navbar from "@/components/bie/village_headman/dashboard/navbar.vue"
import {mapActions, mapGetters} from "vuex";
export default {
  name: "people",
  data(){
    return{
      imageString:'',
      btnIndex:-1,
      search: '',
      title:"ຂໍ້ມູນປະຊາກອນ",
      dialog: false,
      dialogDelete: false,
      dialogView:false,
      menu1:false,
      uploadImage: null,
      previewImage: null,
      imageUrlPreview:'',
      isEdit:false,
      genderItem:[
        'ທ້າວ',
        'ນາງ'
      ],
      headers: [
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
        { text: 'ເລກສຳມະໂນ', value: 'cencus_id' },
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
        cencus_id:''
      },
      defaultItem: {
        name: '',
        surname: '',
        gender: '',
        dateOfBirth: '',
        phoneNumber: '',
        address: '',
        image: '',
        cencus_id:''
      },
    }
  },
  components:{
    Navbar,
    Alert
  },
  computed: {

    ...mapGetters({
      peopleData: "People/peopleData",
      censusData: "Census/censusData"
    }),

    formTitle () {
      return this.btnIndex === -1 ? 'ເພີ່ມປະຊາກອນ' :this.btnIndex === 0 ? 'ແກ້ໄຂປະຊາກອນ' : 'ເບິ່ງລາຍລະອຽດປະຊາກອນ'
    },

  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    dialogView (val) {
      val || this.closeView()
    },
  },

  created () {
    this.getPeople()
    this.getCensus()
  },

  methods: {
    ...mapActions({
      getCensus:"Census/getCensus",
      getPeople: "People/getPeople",
      getPeopleOne: "People/getPeopleOne",
      createPeople: "People/createPeople",
      updatePeople: "People/updatePeople",
      deletePeople: "People/deletePeople",
      getImageUrl: "People/getImageUrl"
    }),

uploadImageByClickOnPreview(){
  this.$refs.myFiles.click()
  console.log(this.$refs.myFiles)
},
    async convertUrlToFileImage(image) {

      
      const response = await fetch(image);
      // here image is url/location of image
      const blob = await response.blob();
      const file = new File([blob], image.split('/').pop(), {type: blob.type});

      this.uploadImage=file

    },

    UploadImage(e) {
      const img = e.target.files[0];

      this.uploadImage = img
      console.log(this.uploadImage)
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = (e) => {
        this.previewImage= e.target.result;
        console.log(this.previewImage);
      }

    },

  removeImage(){
      this.uploadImage = null;
      this.previewImage = null;
      this.imageUrlPreview='';
    },

    viewItem (item) {
      this.btnIndex = 1
      this.editedIndex = this.peopleData['data'].indexOf(item)
      this.peopleItem = Object.assign({}, item)
      this.dialogView = true
    },

    editItem (item) {
      this.imageUrlPreview = "http://127.0.0.1:8000/storage/populations_images/"+item.image
      this.isEdit = true
      this.btnIndex = 0
      this.editedIndex = this.peopleData['data'].indexOf(item)


      //this.getPeopleOne({people_id:this.peopleData['data'][this.editedIndex]['id']})



      this.peopleItem = Object.assign({}, item)
      this.dialog = true
    
    },

    deleteItem (item) {
      this.editedIndex = this.peopleData['data'].indexOf(item)
      console.log(this.editedIndex)
       console.log(this.peopleData['data'][this.editedIndex]['id'])
      this.peopleItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.deletePeople({people_id:this.peopleData['data'][this.editedIndex]['id']})
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.peopleItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.peopleItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeView () {
      this.dialogView = false
      this.$nextTick(() => {
        this.peopleItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      if (this.editedIndex > -1) {
        this.updatePeople(
            {
              people_id: this.peopleData['data'][this.editedIndex]['id'],
              name: this.peopleItem.name,
              surname: this.peopleItem.surname,
              gender: this.peopleItem.gender,
              dateOfBirth: this.peopleItem.dateOfBirth,
              phoneNumber: this.peopleItem.phoneNumber,
              address: this.peopleItem.address,
              image: this.uploadImage,
              cencus_id:this.peopleItem.cencus_id
            },
            this.removeImage()
        )
      } else {
        this.createPeople({
              name: this.peopleItem.name,
              surname: this.peopleItem.surname,
              gender: this.peopleItem.gender,
              dateOfBirth: this.peopleItem.dateOfBirth,
              phoneNumber: this.peopleItem.phoneNumber,
              address: this.peopleItem.address,
              image: this.uploadImage,
          cencus_id:this.peopleItem.cencus_id
            },
            this.removeImage(),
        )
      }
      this.close()
    },
  },

}
</script>

<style lang="scss" scoped>
.container-content{
  width: 100%;
  background-color: #f0f2f5;
  padding: 1rem;
}
 .v-data-table ::v-deep th{

        font-size: 24px !important
  }
    .v-data-table ::v-deep td{
font-size: 16px !important
    }
</style>