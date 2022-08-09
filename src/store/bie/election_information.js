import ElectionInformationProvider from '@/bie/resource/judge/election_information_provider.js'

const electionInformationProvider = new ElectionInformationProvider()

const state={
    candidateHighVoteData:{},
}

const getters={
    candidateHighVoteData:state=>state.candidateHighVoteData,

}

const mutations={
    setCandidateHighVoteData(state,data){
        state.candidateHighVoteData = data;
    },


}

const actions={


    async getCandidateAllHighVote ({commit}) {
        const data = await electionInformationProvider.getCandidateAllHighVote()

        commit('setCandidateHighVoteData', data)

        return data
    },


}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
