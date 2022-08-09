import PeopleForJudgeProvider from '@/bie/resource/judge/people_provider.js'

const peopleForJudgeProvider = new PeopleForJudgeProvider()

const state={
    peopleData:{},
}

const getters={
    peopleData:state=>state.peopleData,

}

const mutations={
    setPeople(state,data){
        state.peopleData = data;
    },


}

const actions={



    async getPeopleOne ({people_id}) {
        return await peopleForJudgeProvider.getPeopleOne({people_id: people_id})
    },

    async getPeople ({commit}) {
        const data = await peopleForJudgeProvider.getPeople()

        commit('setPeople', data)

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
