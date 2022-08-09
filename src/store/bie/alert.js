
const state={
    alertSuccess:false,
    alertWarning:false,
    alertError:false,


}

const getters={
    alertSuccess:state=>state.alertSuccess,
    alertWarning:state=>state.alertWarning,
    alertError:state=>state.alertError,

}

const mutations={
    setAlertSuccess(state,data){
        state.alertSuccess = data;
    },
    setAlertWarning(state,data){
        state.alertWarning = data;
    },
    setAlertError(state,data){
        state.alertError = data;
    },

}

const actions={



    async alertSuccess ({commit},{isAlert}) {


        commit('setAlertSuccess', isAlert)

        return isAlert
    },

    async alertWarning ({commit},{isAlert}) {


        commit('setAlertWarning', isAlert)

        return isAlert
    },

    async alertError ({commit},{isAlert}) {


        commit('setAlertError', isAlert)

        return isAlert
    },


}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
