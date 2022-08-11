<template>
  <div id="app">
    <v-app>
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
  font-family: $font-family  !important;
}


</style>