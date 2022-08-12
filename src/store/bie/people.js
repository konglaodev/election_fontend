import PeopleProvider from '@/bie/resource/village_headman/people_provider.js'

const peopleProvider = new PeopleProvider()

const state={
    peopleData:{},
    peopleVotedData:{},
    imageUrl:''
}

const getters={
    peopleData:state=>state.peopleData,
    peopleVotedData:state=>state.peopleVotedData,
    imageUrl:state=>state.imageUrl

}

const mutations={
    setPeople(state,data){
        state.peopleData = data;
    },
    setPeopleVoted(state,data){
        state.peopleVotedData = data;
    },
    setImageUrl(state,data){
        state.imageUrl = data;
    },

}

const actions={

    async getImageUrl ({commit},{imageUrl}) {
        const data = await peopleProvider.getImageUrl({imageUrl:imageUrl})

        commit('setImageUrl', data)

        return data
    },

    async getPeopleVoted ({commit}) {
        const data = await peopleProvider.getPeople()

        commit('setPeopleVoted', data)

        return data
    },

    async getPeopleOne ({people_id}) {
        return await peopleProvider.getPeopleOne({people_id: people_id})
    },

    async getPeople ({commit}) {
        const data = await peopleProvider.getPeople()

        commit('setPeople', data)

        return data
    },

    async createPeople({dispatch},{
        name,
        surname,
        gender,
        dateOfBirth,
        cencus_id,
        phoneNumber,
        address,
        image

    }){

        let arg={

            
            name:name,
            surname:surname,
            gender:gender,
            dateOfBirth:dateOfBirth,
            cencus_id:cencus_id,
            phoneNumber:phoneNumber,
            address:address,
            image:image
        }

        await peopleProvider.createPeople(arg)
        dispatch('getPeople',{ root: true });
    },

    async updatePeople({dispatch },{
        people_id,
        name,
        surname,
        gender,
        dateOfBirth,
        cencus_id,
        phoneNumber,
        address,
        image

    }){

        let arg={
            people_id:people_id,
            name:name,
            surname:surname,
            gender:gender,
            dateOfBirth:dateOfBirth,
            cencus_id:cencus_id,
            phoneNumber:phoneNumber,
            address:address,
            image:image
        }
        await peopleProvider.updatePeople(arg)
        dispatch('getPeople',{ root: true });

        //commit('SET_POST',data)
    },

    async deletePeople (
        
        {dispatch},{people_id}) {
        await peopleProvider.deletePeople({people_id:people_id})
        dispatch('getPeople',{ root: true });

    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
