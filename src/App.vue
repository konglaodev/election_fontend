<template>
  <div id="app" style="background-color: #D7F4EC;">
    <v-app  rounded color="#D7F4EC">
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
#app 
{
  background-color: #F2FFFC;
  font-family: $font-family  !important;
}


</style>