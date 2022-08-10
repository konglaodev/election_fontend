import UserProvider from '@/bie/resource/judge/user_provider.js'

const userProvider = new UserProvider()

const state={
    userData:{},
}

const getters={
    userData:state=>state.userData,

}

const mutations={
    setUser(state,data){
        state.userData = data;
    },


}

const actions={



    async getUserOne ({user_id}) {
        return await userProvider.getUserOne({user_id: user_id})
    },

    async getUser ({commit}) {
        const data = await userProvider.getUser()

        commit('setUser', data)

        return data
    },

    async createUser({dispatch},{
        name,
        phoneNumber,
        role_id,
        password

    }){
        let arg={
            name:name,
            phoneNumber:phoneNumber,
            role_id:role_id,
            password:password

        }

        await userProvider.createUser(arg)
        dispatch('getUser',{ root: true });
    },

    async updateUser({dispatch },{
        user_id,

        phoneNumber,
        role_id
    }){

        let arg={
            user_id:user_id,

            phoneNumber:phoneNumber,
            role_id:role_id

        }
        await userProvider.updateUser(arg)
        dispatch('getUser',{ root: true });

        //commit('SET_POST',data)
    },

    async deleteUser ({dispatch},{user_id}) {
        await userProvider.deleteUser({user_id:user_id})
        dispatch('getUser',{ root: true });

    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
