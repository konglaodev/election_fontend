<template>
  <v-footer 
  >
    <v-row
      justify="center"
      no-gutters
    >
      
      <v-col
        class="  py-4 text-center  " 
        cols="12"
      >
      <h2>  {{ new Date().getFullYear() }} — <strong >ລະບົບເລືອກຕັ້ງນາຍບ້ານ</strong></h2>
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