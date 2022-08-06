<template>
  <div class="navbar">
    <v-app-bar
        dense
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
          left
          bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              icon
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
              v-for="n in 5"
              :key="n"
              @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >

          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link @click="$router.push('/dashboardsuper')">
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                John Leider
              </v-list-item-title>
              <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
              link
              @click="$router.push('/user_management')"
          >
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>ຈັດການຂໍ້ມູນຜູ້ໃຊ້</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
              link
              @click="$router.push('/people')"
          >
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>ຂໍ້ມູນປະຊາກອນ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
              link
              @click="$router.push('/headman_election_information')"
          >
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>ລາຍງານຂໍ້ມູນຜູ້ສະໝັກເລືອກຕັ້ງ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
              link
              @click="$router.push('/election_information')"
          >
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>ລາຍງານຂໍ້ມູນການເລືອກຕັ້ງ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props:{
    title:String,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style scoped lang="scss">

</style>