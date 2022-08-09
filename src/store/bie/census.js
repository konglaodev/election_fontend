import CensusProvider from '@/bie/resource/village_headman/census_provider.js'

const censusProvider = new CensusProvider()

const state={
    censusData:{},
}

const getters={
    censusData:state=>state.censusData,

}

const mutations={
    setCensus(state,data){
        state.censusData = data;
    },


}

const actions={



    async getCensusOne ({census_id}) {
        return await censusProvider.getCensusOne({census_id: census_id})
    },

    async getCensus ({commit}) {
        const data = await censusProvider.getCensus()

        commit('setCensus', data)

        return data
    },

    async createCensus({dispatch},{
        cencus_id_ref,
        village_id_ref

    }){
        console.log(cencus_id_ref)
        console.log(village_id_ref)
        let arg={

            cencus_id_ref:cencus_id_ref,
            village_id_ref:village_id_ref
        }

        await censusProvider.createCensus(arg)
        dispatch('getCensus',{ root: true });
    },

    async updateCensus({dispatch },{
        census_id,
        cencus_id_ref,
        village_id_ref

    }){
        let arg={
            census_id:census_id,
            cencus_id_ref:cencus_id_ref,
            village_id_ref:village_id_ref,
        }
        await censusProvider.updateCensus(arg)
        dispatch('getCensus',{ root: true });

        //commit('SET_POST',data)
    },

    async deleteCensus ({dispatch},{census_id}) {
        await censusProvider.deleteCensus({census_id:census_id})
        dispatch('getCensus',{ root: true });

    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
