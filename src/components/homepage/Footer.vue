<template>
  <v-footer color="blue"
  >
    <v-row
      justify="center"
      no-gutters
    >
      
      <v-col
        class="  py-4 text-center  " style="font-color:white"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong  >ລະບົບເລືອກຕັ້ງນາຍບ້ານ</strong>
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