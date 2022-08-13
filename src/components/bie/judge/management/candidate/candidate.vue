<template>
  <div>
    <Navbar :title="title"/>
    <div class="container-content">

      <v-data-table
          :search="search"
          :headers="headers"
          :items="candidateData['data']"
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
                    <v-row dense no-gutters>

                      <v-col
                          cols="12"
                      >
                          <div class="check_modal_edit" v-show ="isEdit == false">
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

                        
                         <div class="check_modal_edit" v-show ="isEdit == true && previewImage ==null" @click="uploadImageByClickOnPreview">
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
                      class="pt-10"
                          cols="12"
                      >
                        <v-select
                        v-model="candidateItem.gender"
                        :items="genderItem"
                        item-text="name"
                        item-value="name"
                        label="ເພດ"
                        outlined
                        >

                        
                        </v-select>
                      </v-col>
                      <v-col
                 
                          cols="12"
                      >
                        <v-text-field
                            outlined
                            v-model="candidateItem.name"
                            label="ຊື່"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"

                      >
                        <v-text-field
                            outlined
                            v-model="candidateItem.surname"
                            label="ນາມສະກຸນ"
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
                               v-model="candidateItem.dateOfBirth"
                                label="ວັນ ເດືອນ ປີເກີດ"

                                persistent-hint
                                prepend-icon="mdi-calendar"
                                v-bind="attrs"

                                v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                              v-model="candidateItem.dateOfBirth"
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
                            v-model="candidateItem.degree"

                            label="ລະດັບ"
                        ></v-text-field>
                      </v-col>

                      <v-col
                          cols="12"
                      >
                        <v-text-field

                            outlined
                            v-model="candidateItem.slogan"

                            label="ສະໂລແກນ"
                        ></v-text-field>
                      </v-col>

                      <v-col
                          cols="12"
                      >
                        <v-text-field

                            outlined
                            v-model="candidateItem.history"

                            label="ປະຫວັດ"
                        ></v-text-field>
                      </v-col>

                      <v-col
                          cols="12"
                      >
                        <v-text-field

                            outlined
                            v-model="candidateItem.address"

                            label="ທີ່ຢູ່"
                        ></v-text-field>
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
              <v-card>
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
                max-width="500px"
            >
              <v-card>
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

                            max-height="250"
                            max-width="150"
                            :src="'http://127.0.0.1:8000/storage/candidate_images/'+candidateItem.image"
                        ></v-img>

                      </v-col>

                      <v-col cols="6">
                        <v-row >

                          <v-col
                              cols="12"
                          >
                            <h3>
                              ຊື່ແລະນາມສະກຸນ: {{candidateItem.gender}} {{candidateItem.name}} {{candidateItem.surname}}
                            </h3>
                          </v-col>
                          <v-col
                              cols="12"
                          >
                            <h3>ວັນເດືອນປີເກີດ: {{candidateItem.dateOfBirth}}</h3>
                          </v-col>
                          <v-col
                              cols="12"
                          >

                            <h3>ລະດັບ: {{candidateItem.degree}}</h3>
                          </v-col>
                          <v-col
                              cols="12"
                          >

                            <h3>ສະໂລແກນ: {{candidateItem.slogan}}</h3>
                          </v-col>
                          <v-col
                              cols="12"
                          >

                            <h3>ປະຫວັດ: {{candidateItem.history}}</h3>
                          </v-col>
                          <v-col
                              cols="12"

                          >

                            <h3>ທີ່ຢູ່: {{candidateItem.address}}</h3>
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
        <template v-slot:[`item.image`]="{ item }">

          <v-img
              max-height="250"
              max-width="150"
              :src="'http://127.0.0.1:8000/storage/candidate_images/'+item.image"
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
import Navbar from "@/components/bie/judge/dashboard/navbar.vue"
import {mapActions, mapGetters} from "vuex";
export default {
  name: "elector",
  mounted() {
    this.getCandidate()
  },
  data(){
    return{
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu1:false,
      btnIndex:-1,
      search: '',
      title:"ຈັດການຜູ້ສະໝັກເລືອກຕັ້ງ",
      dialog: false,
      dialogDelete: false,
      dialogView:false,
      uploadImage: null,
      imageUrlPreview:'',
      isEdit:false,
      previewImage: null,
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
        { text: 'ວ/ດ/ປ ເກີດ', value: 'dateOfBirth' },
        { text: 'ລະດັບ', value: 'degree' },
        { text: 'ນະໂຍບາຍ', value: 'slogan' },
        { text: 'ປະຫວັດ', value: 'history' },
        { text: 'ທີ່ຢູ່', value: 'address' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
genderItem:[{id:1,name:"ທ່ານ"},{id:2,name:"ທ່ານ ນາງ"}],
      editedIndex: -1,
      candidateItem: {

        name: '',
        surname: '',
        gender: '',
        dateOfBirth: '',
        degree: '',
        slogan: '',
        history: '',
        address: '',
        image: '',

      },
      defaultItem: {

        name: '',
        surname: '',
        gender: '',
        dateOfBirth: '',
        degree: '',
        slogan: '',
        history: '',
        address: '',
        image: '',
      },
    }
  },
  components:{
    Navbar,
    Alert
  },
  computed: {
    ...mapGetters({
      candidateData: "Candidate/candidateData",
    }),
    formTitle () {
      return this.btnIndex === -1 ? 'ເພີ່ມຜູ້ສະໝັກເລືອກຕັ້ງ' :this.btnIndex === 0 ? 'ແກ້ໄຂປະຊາກອນ' : 'ເບິ່ງລາຍລະອຽດປະຊາກອນ'
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


  methods: {
    ...mapActions({
      getCandidate: "Candidate/getCandidate",
      getCandidateOne: "Candidate/getCandidateOne",
      createCandidate: "Candidate/createCandidate",
      updateCandidate: "Candidate/updateCandidate",
      deleteCandidate: "Candidate/deleteCandidate"
    }),
    async convertUrlToFileImage(image) {
      console.log(image)
      const response = await fetch(image);
      // here image is url/location of image
      const blob = await response.blob();
      const file = new File([blob], image.split('/').pop(), {type: blob.type});

      this.uploadImage=file

    },

    uploadImageByClickOnPreview(){
      this.$refs.myFiles.click()
      console.log(this.$refs.myFiles)
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
      this.editedIndex = this.candidateData['data'].indexOf(item)
      this.candidateItem = Object.assign({}, item)
      this.dialogView = true
    },

    async editItem (item) {
      this.imageUrlPreview = "http://127.0.0.1:8000/storage/candidate_images/"+item.image
      this.isEdit = true
      this.btnIndex = 0
      this.editedIndex = this.candidateData['data'].indexOf(item)
      this.candidateItem = Object.assign({}, item)
      this.dialog = true
      

    },

    deleteItem (item) {
      this.editedIndex = this.candidateData['data'].indexOf(item)
      this.candidateItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {

      this.deleteCandidate({candidate_id:this.candidateData['data'][this.editedIndex]['id']})
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.candidateItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.candidateItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeView () {
      this.dialogView = false
      this.$nextTick(() => {
        this.candidateItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      if (this.editedIndex > -1) {
        //Object.assign(this.candidateData['data'][this.editedIndex], this.candidateItem)
        this.updateCandidate(
            {
              candidate_id: this.candidateData['data'][this.editedIndex]['id'],
              name: this.candidateItem.name,
              surname: this.candidateItem.surname,
              gender: this.candidateItem.gender,
              dateOfBirth: this.candidateItem.dateOfBirth,
              degree: this.candidateItem.degree,
              slogan: this.candidateItem.slogan,
              history: this.candidateItem.history,
              address: this.candidateItem.address,
              image: this.uploadImage,
            },
this.removeImage(),
this.isEdit=false
        )


      } else {
        // this.candidateData['data'].push(this.candidateItem)
        this.createCandidate({
              name: this.candidateItem.name,
              surname: this.candidateItem.surname,
              gender: this.candidateItem.gender,
              dateOfBirth: this.candidateItem.dateOfBirth,
              degree: this.candidateItem.degree,
              slogan: this.candidateItem.slogan,
              history: this.candidateItem.history,
              address: this.candidateItem.address,
              image: this.uploadImage,
            },
            this.removeImage()
          
        )

      }
                      this.previewImage = null
this.uploadImage = null
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
</style>