<template>
<div style="margin-top:100px;">
  <v-carousel hide-delimiters >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  <div class="text_title">
      <h1 style="font-size:50px;">ຍີນດີຕ້ອນຮັບເຂົ້າສູ່ເວັບໄຊ</h1>     
      <h2 style="opacity: 0.5">ເລືອກຕັ້ງນາຍບ້ານຮູບແບບອອນລາຍ</h2>
    </div>

  <div class="text_result">ຜົນການເລືອກຕັ້ງ</div>
  </div>
</template>

<script>
export default {
 data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
}
</script>

<style scoped>

.text_title{
   margin-top: 100px;
    text-align: center;
     margin-bottom: 50px;
}
.text_result{
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
}
</style>