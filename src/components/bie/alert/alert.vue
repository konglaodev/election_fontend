<template>
  <div>
    <v-snackbar
        v-model="$store.state.modalNotificationSuccess.snackbar"
        :timeout="timeout"
        top
        right
        elevation="5"
        class="Modal"
        transition="slide-x-transition"
        color="success"
    >
      ສຳເລັດແລ້ວ

    </v-snackbar>
    <!-- Error -->
    <v-snackbar
        v-model="$store.state.modalNotificationError.snackbar"
        :timeout="timeout"
        top
        right
        elevation="5"
        class="Modal"
        transition="slide-x-transition"
        color="error"
    >
      ເກີດຂໍ້ຜິດພາດ

    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: "alert",
  data() {
    return {
      timeout:3000
    };
  },
  computed:{
    ...mapGetters({
      isSuccess: "Alert/alertSuccess",
      isWarning: "Alert/alertWarning",
      isError: "Alert/alertError",
    }),
  }
}
</script>

<style lang="scss" scoped>
.notification {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  position: absolute;
  padding: 1rem 0;
}
</style>