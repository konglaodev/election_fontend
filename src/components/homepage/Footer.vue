<template>
  <v-footer
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn 
        v-for="link in links"
        :key="link"
        color="black"
        text
        rounded
        class="my-2"
      >
        {{ link }} 
      </v-btn>
     
      <v-col
        class=" lighten-2 py-4 text-center "
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>ລະບົບເລືອກຕັ້ງນາຍບ້ານ</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      
    }),
  }
</script>