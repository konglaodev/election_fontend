import ElectionInformationProvider from '@/bie/resource/judge/election_information_provider.js'

const electionInformationProvider = new ElectionInformationProvider()

const state={
    peopleVotedData:{},
    candidateHighVoteData:{},
}

const getters={
    candidateHighVoteData:state=>state.candidateHighVoteData,
    peopleVotedData:state=>state.peopleVotedData,
}

const mutations={
    setCandidateHighVoteData(state,data){
        state.candidateHighVoteData = data;
    },

    setPeopleVotedData(state,data){
        state.peopleVotedData = data;
    },
}

const actions={


    async getCandidateAllHighVote ({commit}) {
        const data = await electionInformationProvider.getCandidateAllHighVote()

        commit('setCandidateHighVoteData', data)

        return data
    },

    async getPeopleVoted ({commit}) {
        const data = await electionInformationProvider.getPeopleVoted()

        commit('setPeopleVotedData', data)

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
