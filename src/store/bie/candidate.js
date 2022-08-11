import CandidateProvider from '@/bie/resource/village_headman/candidates_provider.js'


const candidateProvider = new CandidateProvider()

const state={
    candidateData:{},
}

const getters={
    candidateData:state=>state.candidateData,

}

const mutations={
    setCandidate(state,data){
        state.candidateData = data;
    },


}

const actions={



    async getCandidateOne ({candidates_id}) {
        return await candidateProvider.getCandidateOne({candidates_id: candidates_id})
    },

    async getCandidate ({commit}) {
        const data = await candidateProvider.getCandidate()

        commit('setCandidate', data)

        return data
    },

    async createCandidate({dispatch},{
        name,
        surname,
        gender,
        dateOfBirth,
        degree,
        slogan,
        history,
        address,
        image

    }){

        let arg={

            name:name,
            surname:surname,
            gender:gender,
            dateOfBirth:dateOfBirth,
            degree:degree,
            slogan:slogan,
            history:history,
            address:address,
            image:image,
            
        }

        await candidateProvider.createCandidate(arg)
        dispatch('getCandidate',{ root: true });
    },

    async updateCandidate({dispatch },{
        id,
        name,
        surname,
        gender,
        dateOfBirth,
        degree,
        slogan,
        history,
        address,
        image,
        
    }){

        let arg={
            id:id,
            name:name,
            surname:surname,
            gender:gender,
            dateOfBirth:dateOfBirth,
            degree:degree,
            slogan:slogan,
            history:history,
            address:address,
            image:image

        }
        await candidateProvider.updateCandidate(arg)
        dispatch('getCandidate',{ root: true });

        //commit('SET_POST',data)
    },

    async deleteCandidate ({dispatch},{id}) {
        await candidateProvider.deleteCandidate({id:id})
        dispatch('getCandidate',{ root: true });

    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
