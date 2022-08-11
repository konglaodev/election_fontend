import VerifyProvider from '@/bie/resource/village_headman/check_permission_election_provider.js'

const verifyProvider = new VerifyProvider()

const state={
    verifyData:{},
}

const getters={
    verifyData:state=>state.verifyData,

}

const mutations={
    setVerify(state,data){
        state.verifyData = data;
    },


}

const actions={



    async getVerify ({commit}) {
        const data = await verifyProvider.getVerify()
        commit('setVerify', data)
        return data
    },



    async updateVerify({dispatch },{
      
        user_id,
        status

    }){
        let arg={
            
            user_id:user_id,
            status:status,
        }
        await verifyProvider.updateVerify(arg)
        dispatch('getVerify',{ root: true });

    },


}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
