import Vue from 'vue'
import Vuex from 'vuex'

import Candidate from '@/store/bie/candidate.js'
import Unit from '@/store/bie/unit.js'
import Census from '@/store/bie/census.js'
import People from '@/store/bie/people.js'
import PeopleForJudge from '@/store/bie/people_for_judge.js'
import User from '@/store/bie/user.js'
import Alert from '@/store/bie/alert.js'
import ElectionInformation from '@/store/bie/election_information.js'
import Verify from '@/store/bie/check_permission_election.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false ,
    showlogoutbutton:false,
    showlogin:false,
    showAdmin:false,
    showSuper:false,
    phoneregister:false,
    modalNotificationSuccess: {
      type: 'success',
      snackbar: false,
      message: ''
    },
    modalNotificationError: {
      type: 'error',
      snackbar: false,
      message: ''
    },
  },
  getters: {
  },
  mutations: {

    SET_NOTIFICATION_SUCCESS(state, message) {
      state.modalNotificationSuccess.snackbar = true;
      state.modalNotificationSuccess.message = message.message;
    },
    SET_NOTIFICATION_ERROR(state, message) {
      state.modalNotificationError.snackbar = true;
      state.modalNotificationError.message = message.message;
    },
  },
  actions: {

    action_Notifi_Success({commit}, {message}) {
      commit('SET_NOTIFICATION_SUCCESS', {message});
    },
    action_Notifi_Error({commit}, {message}) {
      commit('SET_NOTIFICATION_ERROR', {message});
    },
  },
  modules: {

    Candidate,
    Unit,
    Census,
    People,
    User,
    PeopleForJudge,
    Alert,
    ElectionInformation,
    Verify
  }
})
