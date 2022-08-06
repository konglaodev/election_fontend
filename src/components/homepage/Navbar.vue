<template>
 <div>
    <v-app-bar
      color="white"
     
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>ລະບົບເລືອກຕັ້ງນາຍບ້ານບ້ານພະໂພ</v-toolbar-title>
       <v-spacer></v-spacer>
       <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        
           <v-btn v-bind="attrs"
          v-on="on" icon>
        <v-icon >mdi-account</v-icon>
      </v-btn>
        
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
       
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-gray--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ໜ້າຫຼັກ</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ຂໍ້ມູນຜູ້ສະໝັກນາຍບ້ານ</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ຂໍ້ມູນຜູ້ໃຊ້</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
 </div>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
        items: [
        { title: 'ຂໍ້ມູນຜູ້ໃຊ້' },
        { title: 'ລົງທະບຽນ' },
        { title: 'ເຂົ້າສູ່ລະບົບ' },
        
      ],
    }),
  }
</script>